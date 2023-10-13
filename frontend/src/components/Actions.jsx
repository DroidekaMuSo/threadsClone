/* eslint-disable react/prop-types */
import { Flex } from "@chakra-ui/react";

import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";

const Actions = ({ liked, setLiked }) => {
  return (
    <Flex gap={3} my={2} onClick={(e) => e.preventDefault()}>
      <AiOutlineHeart
        color={liked ? "rgb(237,73,86)" : ""}
        fill={liked ? "rgb(237,73,86)" : "transparent"}
        onClick={() => setLiked(!liked)}
      />
      <FaRegComment />
      <BiRepost />
      <PiShareFatLight />
    </Flex>
  );
};

export default Actions;
