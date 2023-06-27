import React, { useState } from "react";
import "./App.css";
import { Map, Layer } from "./components";
import ReactSlider from "react-slider";

function App() {
  const [size, setSize] = useState(10);
  const [opacity, setOpacity] = useState(75);

  const [isCheckColoredByControl, setIsCheckColoredByControl] = useState(false);
  const [r, setR] = useState(177);
  const [g, setG] = useState(150);
  const [b, setB] = useState(226);

  const coloredByExpression = [
    "match",
    ["get", "codigo"],
    "ZAE",
    "#CA0020",
    "ZAI",
    "#CE796B",
    "ZAGT",
    "#7AE068",
    "ZC",
    "#3C096C",
    "ZCM1",
    "#5A189A",
    "ZCM2",
    "#7B2CBF",
    "ZCM3",
    "#9D4EDD",
    "ZCM4",
    "#C77DFF",
    "ZCM5",
    "#E0AAFF",
    "ZCN",
    "#74CB32",
    "ZCA",
    "#0A9F07",
    "ZED",
    "#F87060",
    "ZEPM",
    "#FFBB80",
    "ZI",
    "#014F86",
    "ZIA",
    "#2A6F97",
    "ZIN",
    "#2C7DA0",
    "ZIP",
    "#468FAF",
    "ZPIP",
    "#5FA5C2",
    "ZPET",
    "#194DE8",
    "ZR1",
    "#FFE7B0",
    "ZR2",
    "#FFD56B",
    "ZR3",
    "#FFBA08",
    "ZR4",
    "#FAA307",
    "ZR5",
    "#F46806",
    "ZRM1",
    "#E85D04",
    "ZRM2",
    "#DC2F02",
    "ZRM3",
    "#D00000",
    "ZRM5",
    "#9D0208",
    "ZRM6",
    "#6A040F",
    "ZRA1",
    "#081C15",
    "ZRA2",
    "#1B4332",
    "ZRA3",
    "#2D6A4F",
    "ZRA4",
    "#40916C",
    "ZRA5",
    "#52B788",
    "ZREC1",
    "#B22997",
    "ZREC2",
    "#B262A3",
    "ZREC3",
    "#B28DAB",
    "ZRPUC",
    "#F94144",
    "ZRUR1",
    "#74C69D",
    "ZRUR2",
    "#95D5B2",
    "ZRURNI",
    "#B7E4C7",
    "ZRVIT",
    "#D8F3DC",
    "ZS",
    "#F0ED62",
    "#EFEEEE",
  ];

  const colorByControl = `rgb(${r}, ${g}, ${b})`;
  return (
    <div className="App">
      <div
        style={{
          position: "absolute",
          left: 25,
          top: 25,
          width: 200,
          height: 200,
          border: 1,
          zIndex: 1,
        }}
      >
        <div className="card">
          <h4>Height</h4>
          <div className="slider">
            <ReactSlider
              className="customSlider"
              trackClassName="customSlider-track"
              thumbClassName="customSlider-thumb"
              value={size}
              onChange={(e) => setSize(e)}
              renderThumb={(props, state) => (
                <div {...props}>{state.valueNow}</div>
              )}
            />
          </div>
        </div>
        <div className="card">
          <h4>Opacity</h4>
          <div className="slider">
            <ReactSlider
              className="customSlider"
              trackClassName="customSlider-track"
              thumbClassName="customSlider-thumb"
              value={opacity}
              onChange={(e) => setOpacity(e)}
              renderThumb={(props, state) => (
                <div {...props}>{state.valueNow}</div>
              )}
            />
          </div>
        </div>
        <div className="card color">
          <h4>
            Color:{" "}
            <input
              type="checkbox"
              onChange={() =>
                setIsCheckColoredByControl(!isCheckColoredByControl)
              }
            />
          </h4>
          {isCheckColoredByControl && (
            <>
              <div className="slider">
                <ReactSlider
                  className="customSlider"
                  trackClassName="customSlider-track"
                  thumbClassName="customSlider-thumb"
                  max={255}
                  value={r}
                  onChange={(e) => setR(e)}
                  renderThumb={(props, state) => (
                    <div {...props}>{state.valueNow}</div>
                  )}
                />
              </div>
              <div className="slider">
                <ReactSlider
                  className="customSlider"
                  trackClassName="customSlider-track"
                  thumbClassName="customSlider-thumb"
                  max={255}
                  value={g}
                  onChange={(e) => setG(e)}
                  renderThumb={(props, state) => (
                    <div {...props}>{state.valueNow}</div>
                  )}
                />
              </div>
              <div className="slider">
                <ReactSlider
                  className="customSlider"
                  trackClassName="customSlider-track"
                  thumbClassName="customSlider-thumb"
                  max={255}
                  value={b}
                  onChange={(e) => setB(e)}
                  renderThumb={(props, state) => (
                    <div {...props}>{state.valueNow}</div>
                  )}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <Map>
        <Layer
          id="layer-0"
          typeSource="raster"
          type="raster"
          tiles={["https://tile.openstreetmap.org/{z}/{x}/{y}.png"]}
          tileSize={256}
          sourceLayer="default"
        />
        <Layer
          id="layer-1"
          typeSource="raster"
          type="raster"
          tiles={[
            "https://img.nj.gov/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=Natural2015",
          ]}
          tileSize={256}
          sourceLayer="default"
        />
        <Layer
          id="layer-2"
          typeSource="raster"
          type="raster"
          tiles={[
            "https://geoportal.cepal.org/geoserver/ows?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=geonode%3Alineas_omnibus_origen_destino_montevideo_3857&STYLES=&SRS=EPSG%3A3857&CRS=EPSG%3A3857&TILED=true&access_token=None&WIDTH=256&HEIGHT=256&BBOX={bbox-epsg-3857}",
          ]}
          tileSize={256}
          sourceLayer="default"
        />
        <Layer
          id="layer-3"
          typeSource="vector"
          type="fill-extrusion"
          //scheme="tms"
          sourceLayer="parcelas_vol_extruir_zonif3d"
          tiles={[
            // "http://localhost:81/data/layer_1/{z}/{x}/{y}.pbf",
            // "https://tiles.kan.com.ar/data/construccion/{z}/{x}/{y}.pbf",
            // "https://tiles.kan.com.ar/data/tejido_gcba/{z}/{x}/{y}.pbf",
            //"https://vectortiles.usig.buenosaires.gob.ar/cur3d/tejido/{z}/{x}/{y}.pbf?optimize=true",
            "https://geoportal.lujandecuyo.gob.ar/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=geonode:parcelas_vol_extruir_zonif3d&STYLE=&TILEMATRIX=EPSG:3857:{z}&TILEMATRIXSET=EPSG:3857&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}",
          ]}
          paint={{
            // "fill-extrusion-color": `rgb(${r}, ${g}, ${b})`,
            "fill-extrusion-color": isCheckColoredByControl
              ? colorByControl
              : coloredByExpression,
              // "fill-extrusion-height": ["*", size / 10, ["*", ["get", "h_max"]]],
              "fill-extrusion-height": size,
              "fill-extrusion-opacity": opacity / 100,
          }}
          tileSize={512}
        />
        <Layer
          id="kosovo1"
          typeSource="vector"
          type="fill-extrusion"
          //scheme="tms"
          sourceLayer="poligonos_kosovo"
          tiles={[
            // "http://localhost:81/data/layer_1/{z}/{x}/{y}.pbf",
            // "https://tiles.kan.com.ar/data/construccion/{z}/{x}/{y}.pbf",
            // "https://tiles.kan.com.ar/data/tejido_gcba/{z}/{x}/{y}.pbf",
            //"https://vectortiles.usig.buenosaires.gob.ar/cur3d/tejido/{z}/{x}/{y}.pbf?optimize=true",
            // "https://geoportal.lujandecuyo.gob.ar/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=geonode:parcelas_vol_extruir_zonif3d&STYLE=&TILEMATRIX=EPSG:3857:{z}&TILEMATRIXSET=EPSG:3857&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}",
            "https://demo4.kan.com.ar/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=geonode:poligonos_kosovo&STYLE=&TILEMATRIX=EPSG:3857:{z}&TILEMATRIXSET=EPSG:3857&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}",
          ]}
          paint={{
            // "fill-extrusion-color": `rgb(${r}, ${g}, ${b})`,
            "fill-extrusion-color": colorByControl,
              // "fill-extrusion-height": ["*", size / 10, ["*", ["get", "h_max"]]],
              "fill-extrusion-height": size,
              "fill-extrusion-opacity": opacity / 100,
          }}
          tileSize={512}
        />
        <Layer
          id="kosovo2"
          typeSource="vector"
          type="line"
          sourceLayer="lineas_kosovo"
          tiles={[
            "https://demo4.kan.com.ar/geoserver/gwc/service/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&LAYER=geonode:lineas_kosovo&STYLE=&TILEMATRIX=EPSG:3857:{z}&TILEMATRIXSET=EPSG:3857&FORMAT=application/vnd.mapbox-vector-tile&TILECOL={x}&TILEROW={y}",
          ]}
          paint={{
            "line-color": "#f00",
            "line-width": ["get", "zoom"],
            "line-opacity": opacity / 100,
          }}
          tileSize={512}
        />
        <Layer
          id="kosovo3"
          typeSource="raster"
          type="raster"
          tiles={[
            "https://demo4.kan.com.ar/geoserver/ows?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=geonode%3Apuntos_kosovo&STYLES=&SRS=EPSG%3A3857&CRS=EPSG%3A3857&TILED=true&access_token=None&WIDTH=512&HEIGHT=512&BBOX={bbox-epsg-3857}",
          ]}
          tileSize={512}
          sourceLayer="puntos_kosovo"
        />
      </Map>
    </div>
  );
}

export default App;
