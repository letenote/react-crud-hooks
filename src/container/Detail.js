import React from "react";

const Detail = (props) => {
  const { match : { params } } = props;
  return (
    <>Contact Detail : {`${params.id}`}</>
  )
}

export default Detail;