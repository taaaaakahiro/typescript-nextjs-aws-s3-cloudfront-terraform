validate:
	terraform validate

fmt: validate
	terraform fmt

plan: fmt
	terraform plan

app: fmt
	terraform apply -auto-approve

des:
	terraform destroy -auto-approve

