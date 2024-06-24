import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UserReducer() {
  const users = useSelector((state: any) => {
    return state.user;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <h1>List favorite user</h1>
      <ul>
        {users.map((item: any, index: number) => (
          <li>
            <p>UserName:{item.name}</p>
            <p>
              Favorites:
              {item.favorite ? (
                <span className="material-symbols-outlined color-red">
                  favorite
                </span>
              ) : (
                <span className="material-symbols-outlined">favorite</span>
              )}
            </p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
