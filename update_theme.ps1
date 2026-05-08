# PowerShell script to update common theme classes in the src directory
$files = Get-ChildItem -Path "src" -Include *.tsx, *.css -Recurse

$replacements = @{
    "text-amber-500" = "text-[var(--accent-color)]"
    "text-amber-600" = "text-[var(--accent-color)]"
    "bg-amber-500" = "bg-[var(--accent-color)]"
    "bg-amber-600" = "bg-[var(--accent-color)]"
    "bg-amber-700" = "bg-[var(--accent-color)]"
    "border-amber-500" = "border-[var(--accent-color)]"
    "border-amber-600" = "border-[var(--accent-color)]"
    "shadow-amber-500" = "shadow-[var(--accent-color)]"
    "shadow-amber-600" = "shadow-[var(--accent-color)]"
    "bg-gray-800" = "bg-[var(--primary-bg)]"
    "bg-gray-900" = "bg-[var(--primary-bg)]"
    "bg-gray-700/50" = "glass"
    "bg-gray-800/80" = "glass-dark"
    "bg-gray-800/60" = "glass"
    "backdrop-blur-md" = "" # Removed as it's included in glass classes
    "backdrop-blur-lg" = ""
    "backdrop-blur-sm" = ""
}

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    foreach ($key in $replacements.Keys) {
        $val = $replacements[$key]
        $content = $content -replace [regex]::Escape($key), $val
    }
    Set-Content $file.FullName $content
}
