# PowerShell script to bump patch version in version.txt
$versionFile = "version.txt"
$version = Get-Content $versionFile
$parts = $version -split '\.'
$major = [int]$parts[0]
$minor = [int]$parts[1]
$patch = [int]$parts[2] + 1
$newVersion = "$major.$minor.$patch"
Set-Content $versionFile $newVersion
Write-Output $newVersion
