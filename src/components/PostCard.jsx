import React from "react";
import appwriteService from "../appwrite/conf";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <>
      <Link to={`/post/${$id}`}>
        <div className="w-full flex flex-col bg-gray-200 rounded-xl p-2 mb-10 hover:transition delay-90 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 ">
          <div className="w-full justify-center mb-3">
            {featuredImage ? (
              <img
                src={appwriteService.getFilePreview(featuredImage)}
                alt={title}
                className="rounded-lg aspect-3/2 h-75 object-cover"
              />
            ) : (
              <div className="rounded-xl bg-gray-200 h-48 flex items-center justify-center">
                <span>No Image</span>
              </div>
            )}
          </div>
          <h2 className="font-semibold shrink">{title}</h2>
        </div>
      </Link>
    </>
  );
}

export default PostCard;
