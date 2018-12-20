This project was build with Node.js

## SETUP GUIDE

### Ⅰ. 위 프로젝트를 c:/nodejs/eosprinter 경로로 다운로드

### Ⅱ. nodejs 설치

	- /setup_files/node-v10.14.1-x64.msi

	- 설치 경로는 C:/nodejs/

	- 명령프롬포트에서 [ node -v ] 명령어로 설치유무 확인

### Ⅲ. 명령프롬포트(cmd) 명령어

	- cd c:/nodejs/eosprinter

	- npm install

	- npm install serialport --save

### Ⅳ. run.vbs 실행

	- 설치 경로가 c:/nodejs/eosprinter 가 아닐 경우 실행되지 않습니다

	- 실행 확인 방법은 작업관리자 Node.js: Server-side JavaScript 프로세스 유무로 확인

	- 필요에 따라 위 배치프로그램을 windows 시작프로그램에 등록하여 부팅시 자동실행되도록 설정합니다

	- C:\Users\user_name\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup 경로로 run.vbs파일의 바로가기 파일을 등록 (반드시 바로가기 파일이여야 합니다)

## usb-to-serial Driver

	- /setup-files/PL2303_Prolific_DriverInstaller_v1200/PL2303-Prolific_DriverInstaller_v1200.exe

## Receipt Printer Driver

	- /setup_files/win7_8_EasySet_MiniPrinter_v2.3.3/EasySet_MiniPrinter_WD_win7_8_v2.3.3.exe
	
	- Port "COM3"

	- Baudrate "9600"

	- 프린터 설치 후 프린터가 정상적인 작동을 안 할 경우 장치관리자에 포트가 정상적으로 인식되었는지 확인 후 드라이버 업데이트를 시도해보세요
