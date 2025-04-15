import React from "react";
import appwriteService from "../appwrite/conf";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-2">
        <div className="w-full justify-center mb-3">
          {featuredImage ? (
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className="rounded-lg h-80 w-full object-cover"
            />
          ) : (
            <div className="rounded-xl bg-gray-200 h-48 flex items-center justify-center">
              <span>No Image</span>
            </div>
          )}
        </div>
        <h2 className="text-lg font-medium ">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
