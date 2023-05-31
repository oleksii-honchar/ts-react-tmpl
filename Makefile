SHELL=/bin/bash
RED=\033[0;31m
GREEN=\033[0;32m
NC=\033[0m # No Color

envFileLoc = "$(PWD)/configs/envs/local.env"
envFileProd = "$(PWD)/configs/envs/production.loc.env"

.PHONY: help

help:
	@echo OleksiiHonchar.com automation commands:
	@echo
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(firstword $(MAKEFILE_LIST)) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

chmod-scripts:
	@chmod +x ./devops/local/scripts/chmod-scripts.sh
	@bash ./devops/local/scripts/chmod-scripts.sh
.PHONY: chmod-scripts

load-project-env:
	@. ./devops/local/scripts/load-project-env.sh
.PHONY: load-project-env

check-env-vars:
	@bash ./devops/local/scripts/check-env-vars.sh
.PHONY: check-env-vars

clean-dist:  ## Cleaning ./dist folder
	@printf "${RED}Cleaning ./dist folder:${NC}"
	@rm -rf ./dist
	@printf "${RED}DONE${NC}\n"
.PHONY: clean-dist

build: clean-dist load-project-env check-env-vars ## Build production version
	@npx env-cmd -f $(envFileProd) "$(PWD)/devops/local/scripts/check-env-vars.sh"
	@source $(envFileProd)
	@npx env-cmd -f $(envFileProd) webpack \
		--config ./configs/webpack.config.js \
		--mode production \
		--env BUILD_ANALYZE=$(BUILD_ANALYZE)

	@printf "${GREEN}build: DONE${NC}\n"

build-analyze: load-project-env check-env-vars ## build and analyze bundle content
	$(MAKE) build BUILD_ANALYZE=true

build-loc: clean-dist load-project-env check-env-vars ## Build local version
	@npx env-cmd -f $(envFileLoc) "$(PWD)/devops/local/scripts/check-env-vars.sh"
	@source $(envFileLoc)
	@npx env-cmd -f $(envFileLoc) webpack \
		--config ./configs/webpack.config.js \
		--mode development \
		--env BUILD_ANALYZE=$(BUILD_ANALYZE)
	@printf "${GREEN}build-loc: DONE${NC}\n"

build-loc-analyze: load-project-env check-env-vars# build and analyze bundle content
	$(MAKE) build-loc BUILD_ANALYZE=true


launch-dev-server: load-project-env check-env-vars ## Launches local Webpack dev-server
	@npx env-cmd -f $(envFileLoc) "${PWD}/devops/local/scripts/check-env-vars.sh"
	@source ${envFileLoc}
	@npx env-cmd -f ${envFileLoc} webpack-dev-server \
		--config ./configs/webpack.config.js \
		--mode development \
		--env BUILD_ANALYZE=false \
		--open

watch-loc: ## No dev server - only file watch and rebuild
	@npx env-cmd -f $(envFileLoc) "${PWD}/devops/local/scripts/check-env-vars.sh"
	@source ${envFileLoc}
	@npx env-cmd -f ${envFileLoc} webpack \
		--config ./configs/webpack.config.js \
		--watch \
		--progress \
		--mode development \
		--env BUILD_ANALYZE=false \
