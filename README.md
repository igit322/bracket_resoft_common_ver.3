# 리소프트 홈페이지 만들기 2차 프로젝트

![이미지](https://velog.velcdn.com/images/igit322/post/c7947666-37df-423c-aacf-3714cc3f5417/image.png)

### <프로젝트 일정>  
7월 18일 - 8월 12일 (총 4주) 1차  
8월 15일 - 8월 26일 (총 2주) 리소프트 피드백 반영 기간  
8월 29일 - 결과물 발표  

### <[디자인 시안](https://xd.adobe.com/view/f608027b-e8cb-443a-a512-91ead94bf53e-a35b/specs/)>
  
### <팀원 6인 역할분담>  
- 공통부분 - 상단 메뉴바, 헤더, 푸터  
- 메인 - 뉴스 ,프로젝트, 서비스  
- 메인 - 레퍼런스 / 회사소개 - 소개, 연혁  
- 회사소개 - 조직도, 특허인증, 지도 (7월 18일 - 7월 27일 작업)  
  -> 중도포기 이후 조직도, 특허인증, 지도의 미디어쿼리, 조직도-애니메이션 4파트로 재분배
- 사업현황 - 에코스, 모아두, ETC  
- 정보마당 - 뉴스, 뉴스상세보기  
  
------------  

**팀 저장소** : https://github.com/jwon11/bracket2 　|　 **팀 사이트** : https://jwon11.github.io/bracket2/

**개인파트 사이트** : https://igit322.github.io/bracket_resoft_common_ver.3/

------------  

### <담당파트>  
### **상단 메뉴바, 헤더, 푸터**

![이미지](https://velog.velcdn.com/images/igit322/post/70b4452e-459a-4d98-b55e-2c19f5424d06/image.png)
  
### <기능>
  
#### 1. 상단 메뉴바
- 토글 클릭할 때 펼쳐지는 메뉴 : Toggle click event – fadeToggle (제이쿼리 사용)
- 모바일 사이즈 : 메뉴 내용 변경, 상단 메뉴 글씨 숨김처리  
- 메뉴바 스크롤 시 상단고정  
- 830px 아래로 내려갈 때 화이트 버전 메뉴바로 변경되어 나타남 (제이쿼리 사용)
  
#### 2. 메인 헤더  
- 헤더 이미지 필터 적용  
- 한 방향으로 반복되는 캐러셀 (Infinite Carousel)   
- 3초 마다 이미지가 변경되는 캐러셀 (순수 자바스크립트)  
- 캐러셀 버튼 기능1 : 이미지 넘김 후 다시 오토 슬라이드  
- 캐러셀 버튼 기능2 : 일시정지 누를 시 재생 버튼 나타남 & 앞뒤 버튼 누르거나 재생 버튼 누를 시 일시정지 버튼 나타남  
  
  
![이미지](https://velog.velcdn.com/images/igit322/post/bf1de1ce-e4ef-41b2-83d7-b802489290b4/image.gif)
  
#### 3. 푸터  
- 모바일 사이즈에서 다음 줄로 넘어가는 미디어쿼리  
  
#### 4. 화이트 버전 메뉴바와 헤더  
![이미지](https://velog.velcdn.com/images/igit322/post/32833b6b-5b60-49dd-9a00-1c5cb2f93144/image.png)
![이미지](https://velog.velcdn.com/images/igit322/post/b38f2f75-b7f9-4c65-b2b6-e115d7a1aae7/image.png)
  
- 메뉴바 underline 마우스 오버 시 밑줄 그어지는 효과  
- 서브 페이지 해당 메뉴 부분 밑줄 유지  
- 이너 메뉴 링크 클릭 시 해당 위치로 가는 앵커 -> 포커스 될 때 스크롤 부드럽게 이동  
- 회사소개 페이지에서 헤더 이미지 : 모바일 사이즈에서 범위 넓게 나타나는 이미지  

#### 5. 회사소개 페이지 - 조직도  
![이미지](https://velog.velcdn.com/images/igit322/post/c4508c00-6eec-409f-bb1e-cf437beff9ce/image.png)
![이미지](https://velog.velcdn.com/images/igit322/post/68920929-ad42-4e62-b381-5e0ec842a183/image.png)
- 태블릿, 모바일 사이즈에서 조직도의 형태가 변경되는 미디어쿼리  

### <개발자 노트>
- 시안과 똑같이 만드는 것에 중점을 두었습니다.
- 메뉴 : 모바일 사이즈 이전에 768px ~ 1000px 사이즈에서 로고와 메뉴의 글씨가 겹치지 않게 미리 숨김 처리해주고 메뉴를 집어넣었습니다.  
- 회사소개 페이지 : 마우스 오버 기능이 있는 "조직도" 글자 : 직관성을 높이기 위해 마우스 오버가 될 때 글씨가 리소프트의 블루 색상이 됩니다.  
- 공통부분으로 들어가는 메인을 제외한 페이지별 메뉴와 헤더, 푸터는 일관적인 디자인과 수정이 용이한 작업을 위해, 하나의 CSS 파일을 연결하여 효율적인 작업이 가능합니다.  
- 모든 사이즈에서 잘림 없이 모든 부분을 100% 볼 수 있는 반응형 구현  
  
------------
  
### <제작일지>
220719 헤더, 푸터, 상단메뉴바 틀 잡기 & 푸터 구도 잡기  
220720 헤더 구도 잡기  
220721 헤더 이미지 필터, 메뉴 실선 추가  
220722 다른 페이지에 들어갈 상단 메뉴바 (화이트 버전), 메뉴의 헤더 (공유용 제작)  
  
220725 메뉴, 헤더, 푸터의 미디어쿼리 추가  
220726 토글을 누르면 나타나는 메뉴1 & 팀원 파트 전부 합치기 & 이미지 용량 압축  
220727 토글 메뉴 미디어쿼리 추가  
220728 캐러셀 - 자바스크립트, 키프레임 애니메이션 작업  
220729 토글을 누르면 나타나는 메뉴2 - 애니메이션 제거, 제이쿼리 slideToggle 사용 & 미디어쿼리로 메뉴 나타나는 효과 작업  
  
220801 토글을 누르면 나타나는 메뉴3 - 선 추가, 내용 한꺼번에 슬라이드토글 되는 효과로 변경 (토글이 꼬이는 문제 수정)  
　　　　캐러셀 화살표 버튼 타이머 추가   
220802 ~상단 메뉴바 제이쿼리를 사용한 스크롤 이벤트 (제거)~  
　　　　구버전 참조 - https://igit322.github.io/bracket_resoft_common_ver.1/
  
220803 상단 메뉴바 디테일 수정 : 글자 굵기, 간격, 색상 변경.  마우스 오버 underline 밑줄 그어지는 효과 추가  
　　　　이너 메뉴 : 토글 fadeToggle로 변경 (메뉴 고정안함으로 수정 시 이너메뉴 위치 상단에 붙어서 위치 조정)  
　　　　캐러셀 : 타이머 5초로 변경  
　　　　추가 파트 작업 - 조직도 pc 버전 여백 조정, 미디어쿼리 설계  
220804 조직도 : 받았을 때 테이블로 선 그려진 상태여서 다음줄로 넘기는 미디어쿼리 불가능 하다고 판단 - html 테이블 형식 제거하고 ul, li 이용한 리스트로 변경 - flex로 새로 위치 잡아주고 선은 직접 라인을 추가하여 그림. 주요 클래스명은 최대한 살려서 사용. (총 소요시간 6시간 소요)  
220805 조직도 오류 수정  
　　　　캐러셀 : 일시정지 누르면 재생버튼으로 바뀌는 효과, 앞뒤버튼 누르면 정지하며 재생버튼 나타나는 기능 추가  
　　　　이너 메뉴 앵커 추가  
    
220808 오타수정, 간격 재확인, 미세조정 작업  
　　　　회사소개 페이지 헤더 변경  
220809 캐러셀 교체 ver.2  
220810 캐러셀 오류 수정, 자바스크립트 코드 정리, 엥커 포커스 될 때 스크롤 부드럽게 이동하는 효과  
220811 제작 내용 정리한 문서 작성, 테스트  
220812 - 1차 마감일 - 테스트 마무리 점검 https://igit322.github.io/bracket_resoft_common_ver.2/  

------------  

리소프트 피드백 반영 기간  

220817 추가 주문에 따라 8월 2일에 제거했던 상단 메뉴바 고정, 제이쿼리를 사용한 스크롤 이벤트 다시 추가 변경  
　　　　고정 시 메뉴 특정 위치에서 마우스 오버 underline 밑줄 그어지는 효과 추가  
220822 캐러셀 변경 : 첫 번째 이미지로 돌아가는 현상 없이 계속 한 방향으로 반복되는 슬라이드 형태 (Infinite Carousel)  
　　　　미디어쿼리 최소 사이즈 추가 : 헤더 텍스트영역 모바일 사이즈에서 글씨와 버튼 겹치는 현상 있어서 수정  
220823 최종 마감일 - 웹 표준 검사, 테스트, 작업 내용 정리  https://igit322.github.io/bracket_resoft_common_ver.3/
      
<a href="http://validator.kldp.org/check?uri=https%3A%2F%2Figit322.github.io%2Fbracket_resoft_common_ver.3%2F;accept=text%2Fhtml%2Ctext%2Fxml%2Capplication%2Fxhtml%2Bxml%2Capplication%2Fxml%2C%2A%2F%2A%3Bq%3D0.1">
<img src="http://validator.kldp.org/w3cimgs/validate/html5-blue.png" alt="markup">
</a>  <a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Figit322.github.io%2Fbracket_resoft_common_ver.3%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=ko">
<img src="http://validator.kldp.org/w3cimgs/validate/css30-green.png" alt="markup">
</a> 
