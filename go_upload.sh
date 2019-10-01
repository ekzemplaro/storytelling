#
sudo ufw default allow outgoing
#
git add --all
git commit -m "Commit on Oct/01/2019"
git push -u origin master
#
sudo ufw default deny outgoing
#
