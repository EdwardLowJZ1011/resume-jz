const express = require("express");
const {firedatabase, firestorage} = require("./utils/firebase");
const router = express.Router();
const { response } = require("express");
const date = require("date-and-time");

const distinct = (value, index, self) => {
    if (value != '')
        return self.indexOf(value) === index;
}

router.post('/getProfilePic', async (req, res) => {
    console.log(req.body)
    const {lang} = req.body;

    await firestorage.ref('assets/profiles').listAll()
    .then(async(items) => {
      var image_arr = []
      items.items.forEach(async (itemRef) => {
        url = await itemRef.getDownloadURL();
        metaData = await itemRef.getMetadata();
        metaData['url'] = url;
        image_arr.push(metaData);
        if (image_arr.length == items.items.length){
            res.status(200).json({ success: true, data: image_arr }); 
        }
    });
    }).catch((error) => {
        console.log(error)
      // Uh-oh, an error occurred!
    });

  });

router.post('/getCertTotal', async (req, res) => {
    // console.log(req.body)
    const {lang} = req.body;

    await firedatabase
    .ref(`resume/${lang}/certificates`)
    .once("value")
    .then((snapshot) => {
        res.status(200).json({ success: true, data: snapshot.val().length }); 
    }).catch((error) => {
        console.log(error)
      // Uh-oh, an error occurred!
    });

  });

router.post('/getCertificatePics', async (req, res) => {
    // console.log(req.body)
    const {lang} = req.body;

    await firestorage.ref('assets/certificates').listAll()
    .then(async(items) => {
      var image_arr = []
      items.items.forEach(async (itemRef) => {
        url = await itemRef.getDownloadURL();
        metaData = await itemRef.getMetadata();
        metaData['url'] = url;
        image_arr.push(metaData);

        if (image_arr.length == items.items.length){
            res.status(200).json({ success: true, data: image_arr }); 
        }
    });
    }).catch((error) => {
        console.log(error)
      // Uh-oh, an error occurred!
    });

});

router.post('/getCertPics', async (req, res) => {
    // console.log(req.body)
    const {lang} = req.body;
    await firestorage.ref('assets/certificates').listAll()
    .then(async(items) => {
      var image_json = {}
      items.items.forEach(async (itemRef) => {
        let url = await itemRef.getDownloadURL();
        let metaData = await itemRef.getMetadata();
        image_json[metaData.name] = url;
        // console.log(image_json)
        if (Object.keys(image_json).length == items.items.length){
            res.status(200).json({ success: true, data: image_json }); 
        }
    });
    // await firestorage.ref('assets/certificates').listAll()
    // .then(async(items) => {
    //   let image_json = {};
    //   let size = items.items.length;
    //   for(var i=0; i < size/2; i++){
    //     firstItemRef = items.items[i];
    //     lastItemRef = items.items[size-i];

    //     firsturl = await firstItemRef.getDownloadURL();
    //     firstmetaData = await firstItemRef.getMetadata();
    //     image_json[firstmetaData.name] = firsturl;

    //     lasturl = await lastItemRef.getDownloadURL();
    //     lastmetaData = await lastItemRef.getMetadata();
    //     image_json[lastmetaData.name] = lasturl;
    // };

    // res.status(200).json({ success: true, data: image_json }); 
    }).catch((error) => {
        console.log(error)
      // Uh-oh, an error occurred!
    });

});

router.post('/getCertificateInfos', async (req, res) => {
    // console.log(req.body)
    const {lang} = req.body;

    await firedatabase
    .ref(`resume/${lang}/certificates`)
    .once("value")
    .then((snapshot) => {
          res.status(200).json({
            success: true,
            data: snapshot.val(),
          });
    });
});

router.post('/getTechnologies', async (req, res) => {
    // console.log(req.body)
    const {lang} = req.body;

    await firedatabase
    .ref(`resume/${lang}/certificates`)
    .once("value")
    .then((snapshot) => {
        obj = ''
        c = 0
        snapshot.val().forEach((item)=>{

              obj += ',' + item['technology'].split(',').map(element => {
                return element.trim();
              }).join(',');

              if (c == snapshot.val().length - 1){
                res.status(200).json({ success: true, data: obj.split(',').filter(distinct).map(element => {
                    return {'value':element, 'label': element};
                  })}); 
            } 
            c += 1;
        });
        //   res.status(200).json({
        //     success: true,
        //     data: snapshot.val(),
        //   });
    });
});

// router.post('/getCertificateDetail', async (req, res) => {
//     console.log(req.body)
//     const {lang, imageName} = req.body;

//     await firedatabase
//     .ref(`resume/${lang}/certificates`)
//     .once("value")
//     .then((snapshot) => {
//         var final_data;    
//         for (var i = 0; i < snapshot.val().length; i++){
//             item = snapshot.val()[i];
//             if (item['alias'] == imageName){
//                 final_data = item;
//             }
//         }  

//         var image = firestorage.ref(`assets/certificates/`).listAll().then(
//             async(items) => {
//                 items.items.forEach(async (itemRef) => {
//                     url = await itemRef.getDownloadURL();
//                     metaData = await itemRef.getMetadata();
//                     if (`${final_data['alias']}${final_data['ext']}` == metaData['name']){
//                         final_data['url'] = url;
//                     }
//                }
//         )});

//         if (final_data)
//             res.status(200).json({
//                 success: false,
//                 data: final_data,
//                 msg: `Image found, ${final_data['alias']}${final_data['ext']}`
//             });
//         else
//             res.status(200).json({
//                 success: false,
//                 data: [],
//                 msg: "No image found"
//             });
//     });
// });

router.post('/getCertificateDetail', async (req, res) => {
        console.log(req.body)
        const {lang, imageName} = req.body;
        console.log(imageName)
        await firedatabase.ref(`resume/${lang}/certificates`).orderByChild('alias').equalTo(imageName)
            .once("value").then((snapshot) => {
                console.log(snapshot.val());
            });

});


router.post('/getSingleCertificatePics', async (req, res) => {
    // console.log(req.body)
    const {lang, imageName} = req.body;

    await firestorage.ref('assets/certificates').listAll()
    .then(async(items) => {
      let metaData = {};
      for(var i=0; i < items.items.length; i++){
        itemRef = items.items[i];
        url = await itemRef.getDownloadURL();
        metaData = await itemRef.getMetadata();
        metaData['url'] = url;
        if (metaData['name'] == imageName) break;
      }
      console.log(metaData);
       res.status(200).json({
            success: true,
            data: metaData  ? metaData : []
        });  
    }).catch((error) => {
        console.log(error)
      // Uh-oh, an error occurred!
    });

});

module.exports = router;
