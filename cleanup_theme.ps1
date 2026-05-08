# PowerShell script to clean up theme class suffixes
$files = Get-ChildItem -Path "src" -Include *.tsx, *.css -Recurse

$replacements = @{
    "\[var\(--accent-color\)\]-[0-9]+" = "[var(--accent-color)]"
    "\[var\(--primary-bg\)\]-[0-9]+" = "[var(--primary-bg)]"
    "glass  " = "glass "
    "glass-dark  " = "glass-dark "
}

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    foreach ($key in $replacements.Keys) {
        $content = $content -replace $key, $replacements[$key]
    }
    Set-Content $file.FullName $content
}
