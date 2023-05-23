#!/bin/sh
bench build --apps rexcre
sudo supervisorctl stop all
sudo supervisorctl start all