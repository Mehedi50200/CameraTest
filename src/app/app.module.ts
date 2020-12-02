import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Camera } from '@ionic-native/camera';

import { DocumentScanner } from '@ionic-native/document-scanner/ngx';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker';
import { ImageResizer } from '@ionic-native/image-resizer';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { Base64 } from '@ionic-native/base64';
import { CameraPreview} from '@ionic-native/camera-preview';
import { Crop } from '@ionic-native/crop';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    DocumentScanner,
    File,
    FileOpener,
    ImagePicker,
    ImageResizer,
    Base64ToGallery,
    Base64,
    CameraPreview,
    Crop,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
