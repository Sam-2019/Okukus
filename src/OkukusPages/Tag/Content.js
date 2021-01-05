import React from "react";
import { useParams } from "react-router-dom";
import View from "../Container/View/View";
import Spinner from "../Spinner/Spinner";
import { useAuthentication } from "../Auth/Context";
import { useAsync } from "../helpers";
import "./content.css";

const Content = () => {
  const { getTag } = useAuthentication();

  let { id } = useParams();

  var formData = new FormData();
  formData.set("tag_title", id);

  const resource = useAsync(getTag, formData);

  let content = resource.value.map((items, i) => <View key={i} {...items} />);

  return (
    <>
      <div className="tag_content">
        <div className="page_title"> {id}</div>
      </div>

      {resource.loading ? (
        <Spinner size="big" />
      ) : (
        <div className="products_wrapper">{content}</div>
      )}
    </>
  );
};

export default Content;
