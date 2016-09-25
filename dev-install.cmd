cd %~dp0foo
call npm link

cd %~dp0bar
call npm link
call npm link foo

cd %~dp0testApp
call npm link foo
call npm link bar
