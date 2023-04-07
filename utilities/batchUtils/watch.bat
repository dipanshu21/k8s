@REM Add this file path to your PATH environment variable and run it like this: watch <command> <args>
@ECHO OFF
:loop
  cls
  %*
  timeout /t 1 > NUL
goto loop