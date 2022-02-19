<div id="top"></div>

<div align='center'>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=blue"/>
</div>

<br />

<div align="center">
  <h3 align="center">3주차 과제 - 콜로세움 코퍼레이션</h3>
  <p align="center">
    콜로세움 코퍼레이션의 기존 Admin Page UI를 개선하기 위한 과제입니다.
    <br />
    <br />
    <a href="https://wanted-colosseum-admin.vercel.app"><strong>배포 링크</strong></a>
  </p>
</div>

<br>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#팀원-소개">팀원 소개</a></li>
    <li><a href="#과제-소개">과제 소개</a></li>
    <li><a href="#구현한-기능">구현한 기능</a></li>
    <li>
      <a href="#설치-및-실행">설치 및 실행
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#프로젝트-구조">프로젝트 구조</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<br>

## 팀원 소개

<table align="center">
  <tr>
    <td align="center"><a href="https://github.com/jambottle"><img src="https://avatars.githubusercontent.com/u/72926450?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/gml9812"><img src="https://avatars.githubusercontent.com/u/28294925?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/Yummy-sk"><img src="https://avatars.githubusercontent.com/u/60822846?v=4" width="150px" /></a></td>
    <td align="center"><a href="https://github.com/seoysauce"><img src="https://avatars.githubusercontent.com/u/65898861?v=4" width="150px" /></a></td>
  </tr>
  <tr>
    <td align="center"><b>김재원</b></td>
    <td align="center"><b>👑 윤희준 (팀장)</b></td>
    <td align="center"><b>염상권</b></td>
    <td align="center"><b>정서영</b></td>
  </tr>
  <tr>
    <td align="center"><b>기획 및 페이지 구현</b></td>
    <td align="center"><b>피드백 및 리팩토링</b></td>
    <td align="center"><b>피드백 및 리팩토링</b></td>
    <td align="center"><b>피드백 및 리팩토링</b></td>
  </tr>
</table>

<br>
<hr>
<br>

## 과제 소개

### As-Is

현재 콜로세움 코퍼레이션의 "출고 매핑 관리" 페이지는 1:N 종속 관계의 2계층 데이터를 화면에 보여주고 있습니다.

- 출고 신청 정보 (1)
- 출고 요청서 매핑 리스트 (N)

특히 '출고 요청서 매핑 리스트' 테이블의 경우에는 보여주고자 하는 데이터의 Column 개수가 20가지 이상으로, '출고 신청 정보' 테이블에 비해 훨씬 많은 데이터를 보여주려고 하다 보니 한 페이지에 모든 데이터를 충분히 보여주기 어려운 상황입니다.
<br>
(즉, 화면에 전체 테이블이 담기지 못하기 때문에 해상도가 낮거나 패드 크기의 화면에서는 모든 데이터를 한눈에 보기 어렵습니다.)

### To-Be

이번 과제를 통해 화면 내 불필요한 여백을 줄여 화면 안에서 최대한 많은 데이터를 효율적으로 보여주면서도,
<br>
1:N 종속 관계의 데이터 계층을 어떻게 하면 효과적으로 표현할 수 있을지 고민해보는 것이 가장 중요한 목표였습니다.

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 구현한 기능

구현한 기능 목록을 작성할 영역입니다.

- [x] Material UI 라이브러리에 내장되어 있는 Grid System, Data Table 등의 컴포넌트 및 템플릿 활용

- [x] **출고 신청 정보** (`RequestInfo` 컴포넌트)

  <img src="https://user-images.githubusercontent.com/72926450/154784307-00cb50be-5837-4b01-b85a-609aa5ad9207.png" width="960px" />

  - [x] MUI 내장 컴포넌트 중 Card, Grid 등을 활용하여 기존의 정방형 카드를 가로 형태의 레이아웃으로 수정
  - [x] 출고 신청 정보 중 일부 정보에 한해, 직접 정보를 수정할 수 있게 하기 위하여 간단한 Select Box 기능 구현

<br>

- [x] **출고 요청서 매핑 리스트** (`RequestList` 컴포넌트)

  <img src="https://user-images.githubusercontent.com/72926450/154797194-3d96d8ce-6f19-49b5-983d-c2f5ec7dee33.png" width="960px" />

  - [x] MUI 내장 템플릿 중 Collapsible Table을 활용하여 기존의 가로형 테이블을 두 개의 계층을 지닌 테이블로 수정
  - [x] 우선순위가 높은 데이터를 1계층 테이블에서 먼저 보여주고, 그 외의 데이터는 2계층 테이블을 열어서 확인 가능
    - [x] 하나의 2계층 테이블 내에서도 데이터 연관성에 따라 2개의 테이블로 한 번 더 나눠 데이터 스키마에 가깝게 레이아웃 개선

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 설치 및 실행

배포 링크가 동작하지 않을 시, local에서 프로젝트를 실행하는 방법을 작성할 영역입니다.

### Prerequisites

1. NPM Install

```sh
npm install npm@latest -g
```

### Installation

1. Repository를 clone한다.

```sh
git clone https://github.com/team-tyranno/wanted-colosseum-admin.git
```

2. NPM Package들을 설치한다.

```sh
npm install
```

3. Localhost 환경에서 프로젝트를 실행한다.

```sh
npm start
```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## 프로젝트 구조

프로젝트 구조를 작성할 영역입니다. (Optional)

```bash
├── public
│   ├── index.html
├── src
│   ├── pages
│   │   └── DeliveryManagement.js ("출고 매핑 관리" 페이지)
│   └── components
│       └── DeliveryManagement
│           └── RequestInfo.js ('출고 신청 정보' 컴포넌트)
│           └── RequestList.js ('출고 요청서 매핑 리스트' 컴포넌트)
├── index.js
└── App.js
```

<p align="right">(<a href="#top">back to top</a>)</p>

<br>
<hr>
<br>

## License

라이센스를 표시할 영역입니다.

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
