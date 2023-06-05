# M1 mac
ci:
	act --container-architecture linux/amd64 --workflows .github/workflows/ci.yml

# ci:
# 	act --workflows .github/workflows/ci.yml