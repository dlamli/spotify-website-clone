"use client";

import { useState } from "react";
import { FieldValues, set, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import uniqid from "uniqid";
import { useRouter } from "next/navigation";

import { useUploadModal, useUser } from "@/hooks";
import { Modal, Input, Button } from "@/components";

export const UploadModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const uploadModal = useUploadModal();
  const { register, handleSubmit, reset } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const handleChange = (open: boolean) => {
    if (!open) {
      //Reset Form
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    // Upload supabase
    try {
      setIsLoading(true);
      const imgFile = values.image?.[0];
      const songFile = values.song?.[0];

      if (!imgFile || !songFile || !user) {
        toast.error("Missing fields");
        return;
      }

      //Upload Song
      const uId = uniqid();
      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`song-${values.title}-${uId}`, songFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (songError) {
        setIsLoading(false);
        toast.error("Failed to upload song");
      }

      //Upload image
      const { data: imgData, error: imgError } = await supabaseClient.storage
        .from("images")
        .upload(`image-${values.title}-${uId}`, imgFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (imgError) {
        setIsLoading(false);
        toast.error("Failed to upload image");
      }

      const { error: supabaseError } = await supabaseClient
        .from("songs")
        .insert({
          user_id: user.id,
          title: values.title,
          author: values.author,
          image_path: imgData?.path,
          song_path: songData?.path,
        });

      if (supabaseError) {
        setIsLoading(false);
        return toast.error(supabaseError.message);
      }

      router.refresh();
      setIsLoading(false);
      toast.success("Song uploaded successfully");
      reset();
      uploadModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Add a song"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={handleChange}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          flex
          flex-col
          gap-y-4
        "
      >
        <Input
          id="title"
          disabled={isLoading}
          placeholder="Song Title"
          {...register("title", { required: true })}
        />
        <Input
          id="author"
          disabled={isLoading}
          placeholder="Author"
          {...register("author", { required: true })}
        />
        <div>
          <div className="pb-1">Select a song file</div>
          <Input
            id="song"
            type="file"
            disabled={isLoading}
            accept=".mp3"
            {...register("song", { required: true })}
          />
        </div>
        <div>
          <div className="pb-1">Select an image</div>
          <Input
            id="image"
            type="file"
            disabled={isLoading}
            accept="image/*"
            {...register("image", { required: true })}
          />
        </div>
        <Button disabled={isLoading} type="submit">
          Create
        </Button>
      </form>
    </Modal>
  );
};
