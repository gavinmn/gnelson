import React from "react"
import styled from "styled-components"
import Image from "next/image"
import PostWrapper from "../components/postwrapper"
import CustomImage from "../components/customimage"
import PostLink from "../components/postlink"
import { device } from "../components/device"

const BlenderTips = props => (
  <PostWrapper
    title="Blender Tips"
    subtitle="A list of tips to help shrink the learning curve"
    time="January xxx, 2021"
  >
    <CustomImage
      size="full"
      src="/images/index/blender.png"
      width="816"
      height="294"
    />
    <p>
      Blender is a fantastic,{" "}
      <PostLink link="https://github.com/blender/blender">
        open-source{" "}
      </PostLink>
      3D creative tool. This collection of tips is aimed to help lessen
      Blender's generally steep learning curve.
    </p>
  </PostWrapper>
)

export default BlenderTips
