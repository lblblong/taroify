import { Backdrop, Button } from "@taroify/core"
import { View } from "@tarojs/components"
import * as React from "react"
import { useState } from "react"
import Block from "../../components/block"
import Page from "../../components/page"

import classes from "./index.module.scss"

export default function BackdropDemo() {
  const [open, setOpen] = useState(false)
  const [opened2, setOpened2] = useState(false)

  return (
    <Page title="Backdrop">
      <Block title="基础用法">
        <Button
          variant="contained" color="primary"
          onClick={() => setOpen(true)}
        >显示背景板</Button>
        <Backdrop
          open={open} closeable
          onClose={() => setOpen(false)}
        />
      </Block>
      <Block title="嵌入内容">
        <Button
          variant="contained" color="primary"
          onClick={() => setOpened2(true)}
        >嵌入内容</Button>
        <Backdrop
          open={opened2} closeable
          onClose={() => setOpened2(false)}
        >
          <View className={classes.ContentWrapper}>
            <View className={classes.ContentBlock} />
          </View>
        </Backdrop>
      </Block>
    </Page>
  )
}
