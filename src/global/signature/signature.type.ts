export type TSignature = {
  api_key: string, // access key from API key
  req_time: string, // the timestamp when sending the request, string of 10 digits stands for the seconds since Unix epoch, for instance 1572537600
  sign: string // calculated signature
}
