#!/bin/bash

NOW=`date +"%Y%m%d %H:%M:%S"`
SCRIPT_DIR="$(realpath "$(dirname "$0")")"

echo
echo '---------------- Getting our app set up as a systemd service ----------------'

cat > $SCRIPT_DIR/run.adacapital.web.service << EOF
[Unit]
Description=ADA Capital web app Run Script
Wants=network-online.target
After=multi-user.target

[Service]
User=$USER
Type=simple
WorkingDirectory=$SCRIPT_DIR
Restart=always
RestartSec=5
LimitNOFILE=131072
ExecStart=/bin/bash -c '$SCRIPT_DIR/run.adacapital.web.sh'
KillSignal=SIGINT
RestartKillSignal=SIGINT
TimeoutStopSec=2
SuccessExitStatus=143
SyslogIdentifier=run.adacapital.web

[Install]
WantedBy=multi-user.target
EOF

sudo mv $SCRIPT_DIR/run.adacapital.web.service /etc/systemd/system/run.adacapital.web.service
sudo systemctl daemon-reload
sudo systemctl enable run.adacapital.web

echo
echo '---------------- Setup completed ----------------'

sudo systemctl status run.adacapital.web --no-pager
