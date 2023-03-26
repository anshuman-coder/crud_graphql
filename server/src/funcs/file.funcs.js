const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_S3_REGION,
});

const spacesEndpoint = new AWS.Endpoint(process.env.AWS_S3_ENDPOINT);
const s3 = new AWS.S3({ endpoint: spacesEndpoint });

exports.uploadFile = async (file) => { 

  const params = {
    Bucket: process.env.AWS_S3_BUCKET,
    key: file.filename,
    Body: file.buffer,
    ACL: "public-read",
    ContentType: file.mimetype,
    ContentDisposition: `inline; filename="${file.filename}"`,
  }

  return new Promise((res, rej) => {
    s3.upload(params, (error, data) => {
      if (error) {
        console.log(error)
        rej(error)
        throw error
      } else {
        res({
          key: params.key,
          bucket: params.Bucket,
          url: data.Location
        });
      }
    })
  });
}