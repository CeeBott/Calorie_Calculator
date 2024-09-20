mkdir -p backup
cp -R app/components backup/

backup_dir=~/Documents/project_backups/CalorieCalculator_$(date +%Y%m%d)
mkdir -p "$backup_dir"
cp -R backup/* "$backup_dir"/

echo "Backup created in project and in $backup_dir"
