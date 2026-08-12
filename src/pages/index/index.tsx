import { useState } from "react";
import { View, Slider } from "@tarojs/components";
import "./index.less";

export default function SliderDemo() {
  const [cropParams, setCropParams] = useState({ scale: 1 });

  return (
    <View className="slider-page">
      <Slider
        className="slider"
        min={0.5}
        max={3}
        step={0.05}
        value={cropParams.scale}
        blockSize={18}
        activeColor="#4F6BFF"
        onChanging={(e) => setCropParams({ scale: e.detail.value })}
        onChange={(e) => setCropParams({ scale: e.detail.value })}
      />
    </View>
  );
}
