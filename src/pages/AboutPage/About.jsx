import React from "react";
import { useParams } from "react-router-dom";

export default function AboutPage() {
  const { name } = useParams();
  return (
    <div>
      <h1>Hello, {name ?? "Unknown user"}!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum neque
        saepe cupiditate, suscipit aperiam possimus vitae recusandae, vel culpa
        eum hic nesciunt molestias sunt totam deleniti. Mollitia at iste hic!
      </p>
    </div>
  );
}
