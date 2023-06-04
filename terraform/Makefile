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

# M1 mac
ci:
	act --container-architecture linux/amd64 --workflows .github/workflows/ci.yml

# ci:
# 	act --workflows .github/workflows/ci.yml