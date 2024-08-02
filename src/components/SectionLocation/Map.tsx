import React from "react";
import { StateLocation } from "./SectionLocation";

interface mapProps {
  stateLocation: StateLocation;
}
 
const Map: React.FC<mapProps> = ({ stateLocation }) => {
  const srcIframe = {
    diur: "https://yandex.ru/map-widget/v1/?ll=53.360158%2C65.277241&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE0MDg4NRLCAdCg0L7RgdGB0LjRjywg0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JrQvtC80LgsINC80YPQvdC40YbQuNC_0LDQu9GM0L3Ri9C5INGA0LDQudC-0L0g0JjQttC10LzRgdC60LjQuSwg0LzRg9C90LjRhtC40L_QsNC70YzQvdC-0LUg0L7QsdGA0LDQt9C-0LLQsNC90LjQtSDQmtGA0LDRgdC90L7QsdC-0YAsINC00LXRgNC10LLQvdGPINCU0LjRjtGAIgoNiHBVQhUjjoJC&z=15.6",
    krasnobor:
      "https://yandex.ru/map-widget/v1/?ll=53.286611%2C65.294082&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE0MDg4NBLGAdCg0L7RgdGB0LjRjywg0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JrQvtC80LgsINC80YPQvdC40YbQuNC_0LDQu9GM0L3Ri9C5INGA0LDQudC-0L0g0JjQttC10LzRgdC60LjQuSwg0LzRg9C90LjRhtC40L_QsNC70YzQvdC-0LUg0L7QsdGA0LDQt9C-0LLQsNC90LjQtSDQmtGA0LDRgdC90L7QsdC-0YAsINGB0LXQu9C-INCa0YDQsNGB0L3QvtCx0L7RgCIKDRokVUIV_ZaCQg%2C%2C&z=16.15",
    shelur:
      "https://yandex.ru/map-widget/v1/?ll=53.416514%2C65.324319&mode=poi&poi%5Bpoint%5D=53.417916%2C65.325868&poi%5Buri%5D=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE0MDg4NxLEAdCg0L7RgdGB0LjRjywg0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JrQvtC80LgsINC80YPQvdC40YbQuNC_0LDQu9GM0L3Ri9C5INGA0LDQudC-0L0g0JjQttC10LzRgdC60LjQuSwg0LzRg9C90LjRhtC40L_QsNC70YzQvdC-0LUg0L7QsdGA0LDQt9C-0LLQsNC90LjQtSDQqdC10LvRjNGP0Y7RgCwg0L_QvtGB0ZHQu9C-0Log0KnQtdC70YzRj9GO0YAiCg3yq1VCFdimgkI%2C&z=14.59",
    vertep:
      "https://yandex.ru/map-widget/v1/?ll=53.203203%2C65.298611&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE0MDg4MhLGAdCg0L7RgdGB0LjRjywg0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JrQvtC80LgsINC80YPQvdC40YbQuNC_0LDQu9GM0L3Ri9C5INGA0LDQudC-0L0g0JjQttC10LzRgdC60LjQuSwg0LzRg9C90LjRhtC40L_QsNC70YzQvdC-0LUg0L7QsdGA0LDQt9C-0LLQsNC90LjQtSDQmtGA0LDRgdC90L7QsdC-0YAsINC00LXRgNC10LLQvdGPINCS0LXRgNGC0LXQvyIKDevQVEIVCZmCQg%2C%2C&z=15.37",
  };
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <iframe
        src={srcIframe[stateLocation]}
        width="1208"
        height="400"
        frameBorder={"1"}
        allowFullScreen={true}
        style={{ position: "relative" }}
      ></iframe>
    </div>
  );
};

export default Map;
