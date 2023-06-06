output "cloudfront_id" {
  value = aws_cloudfront_distribution.main.id
}

output "s3_bucket_name" {
  value = aws_s3_bucket.main.bucket
}