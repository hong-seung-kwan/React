# App.js 정리
$lines = Get-Content "src\App.js"
$result = @()
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($i -ne 0 -and $i -ne 1 -and ($i -lt 6 -or $i -gt 19)) {
        $result += $lines[$i]
    }
}
Set-Content "src\App.js" $result

# index.js 줄 삭제
$index = Get-Content "src\index.js"
$indexResult = @()
for ($i = 0; $i -lt $index.Count; $i++) {
    if ($i -notin 0,2,4,8,10,13,14,15,16) {
        $indexResult += $index[$i]
    }
}
Set-Content "src\index.js" $indexResult
