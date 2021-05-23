@echo on
for /f "tokens=1,2 delims==" %%a in (default.ini) do (
    if %%a==runmake set runmake  %%b
)

echo %runmake%

node .