import React, { useState } from "react";
import { CollectionItemCtn } from "./collectionItem.styles";

const CollectionItem = ({ data }) => {
  const [loaded, setloaded] = useState(false);

  const showImage = () => {
    setloaded(true);
  };

  return (
    <CollectionItemCtn
      onClick={() => {
        // openPopUp(data);
      }}
    >
      <>
        <img
          src="https://via.placeholder.com/200?text=Loading%20image"
          style={loaded ? { display: "none" } : {}}
        />
        <img
          src={data.image_url}
          onLoad={showImage}
          style={loaded ? {} : { display: "none" }}
        />
      </>
      <div className="details">{data.name}</div>
    </CollectionItemCtn>
  );
};

export default CollectionItem;
