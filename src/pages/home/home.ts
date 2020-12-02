import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import {
  CameraPreview,
  CameraPreviewOptions,
} from "@ionic-native/camera-preview";
// import { Crop } from "@ionic-native/crop";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  smallPreview: boolean;
  IMAGE_PATH: any;
  colorEffect = "none";
  setZoom = 1;
  flashMode = "off";
  isToBack = false;

  constructor(public navCtrl: NavController, private cp: CameraPreview) {}

  startCameraAbove() {
    const cpOption: CameraPreviewOptions = {
      x: 80,
      y: 450,
      width: window.screen.width,
      height: window.screen.height,
      camera: this.cp.CAMERA_DIRECTION.BACK,
      tapPhoto: true,
      previewDrag: true,
      toBack: false,
      alpha: 1,
    };
    // this.cp.stopCamera().then((res) => {
    //   console.log("startCameraAbove: " + res);
      this.cp.startCamera(cpOption).then((res) => {
        console.log("StartCamera: " + res);
      });
  //   });
   }

  startCameraBelow() {
    const cpOption: CameraPreviewOptions = {
      x: 0,
      y: 50,
      width: window.screen.width,
      height: window.screen.height,
      camera: this.cp.CAMERA_DIRECTION.FRONT,
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1,
    };

    // this.cp.stopCamera().then((res) => {
    //   console.log("startCameraBelow: " + res);
      this.cp.startCamera(cpOption).then((res) => {
        console.log("StartCamera: " + res);
      });
    // });
  }

  takePicture() {
    this.cp
      .takePicture({
        width: 1280,
        height: 1280,
        quality: 85,
      })
      .then(
        (imageData) => {
          this.IMAGE_PATH = "data:image/jpeg;base64," + imageData;
        },
        (err) => {
          console.log(err);
          this.IMAGE_PATH = "assets/img/test.jpg";
        }
      );
  }

  switchCamera() {
    this.cp.switchCamera();
  }

  changeFlashMode() {
    this.cp.setFlashMode(this.flashMode);
  }

  changeZoom() {
    this.cp.setZoom(this.setZoom);
  }

  show() {
    this.cp.show();
  }
  hide() {
    this.cp.hide();
  }

  stopCamera() {
    this.cp.stopCamera();
  }
}
