import React from "react";

export const useDecode = (rawHTML: string, htmlType: string) =>
  React.createElement(htmlType, {
    dangerouslySetInnerHTML: { __html: rawHTML },
  });
