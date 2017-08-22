import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {  } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {

  public upload_path: string = '/uploads';

  constructor() { }

  upload(file: File, cb: Function) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.upload_path}/${file.name}`).put(file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, {
      'next': (snapshot) => {
      },
      'error': (err) => {
      },
      'complete': () => {
        return cb(uploadTask.snapshot.downloadURL);
      }
    });
    
  }

}
