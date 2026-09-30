"use client";

import React, { useState } from 'react';
import { Moon, Sun, ArrowUpRight, Mail, Download } from 'lucide-react';

export default function PortfolioPage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  // Aesthetic definitions
  const bgMain = theme === 'dark' ? 'bg-[#000000]' : 'bg-[#FAFAFA]';
  const textMain = theme === 'dark' ? 'text-[#EDEDED]' : 'text-[#171717]';
  const textMuted = theme === 'dark' ? 'text-[#A1A1AA]' : 'text-[#71717A]';
  const borderLight = theme === 'dark' ? 'border-[#27272A]' : 'border-[#E4E4E7]';
  const cardBg = theme === 'dark' ? 'bg-[#0A0A0A]' : 'bg-[#FFFFFF]';
  const buttonClass = `inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors border ${theme === 'dark' ? 'bg-[#EDEDED] text-[#000000] border-transparent hover:bg-[#D4D4D8]' : 'bg-[#171717] text-[#FFFFFF] border-transparent hover:bg-[#27272A]'}`;
  const secondaryButtonClass = `inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors border ${theme === 'dark' ? 'bg-transparent text-[#EDEDED] border-[#27272A] hover:bg-[#27272A]' : 'bg-transparent text-[#171717] border-[#E4E4E7] hover:bg-[#F4F4F5]'}`;

  return (
    <div className={`min-h-screen ${bgMain} ${textMain} font-sans selection:bg-blue-500/30 transition-colors duration-300`}>
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${borderLight} ${theme === 'dark' ? 'bg-[#000000]/80' : 'bg-[#FAFAFA]/80'}`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-semibold tracking-tight text-lg">Areum Kang</div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/altdmfk" target="_blank" rel="noopener noreferrer" className={`flex items-center space-x-1.5 text-sm font-medium ${textMuted} hover:${textMain} transition-colors`}>
              <span>GitHub</span>
            </a>
            <button onClick={toggleTheme} className={`p-1.5 rounded-md ${textMuted} hover:${textMain} transition-colors`}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 space-y-24">
        
        {/* Hero Section */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
            강아름 (Areum Kang)
          </h1>
          <p className={`text-xl md:text-2xl font-medium tracking-tight leading-snug max-w-2xl ${textMuted}`}>
            "대용량 데이터의 병목을 해결하고, 신뢰성 높은 백엔드 아키텍처를 설계하는 사람"
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href="mailto:xnzktcm@naver.com" className={`${buttonClass} px-6`}>
              <Mail size={16} />
              <span className="font-mono text-sm tracking-wide">xnzktcm@naver.com</span>
            </a>
            <a href="/resume.pdf" className={secondaryButtonClass}>
              <Download size={16} />
              <span>이력서 다운로드</span>
            </a>
          </div>
        </section>

        {/* The Story & Activity Metrics */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b pb-4 mb-6">
            <h2 className="text-2xl font-bold tracking-tight mb-6 md:mb-0">나의 이야기</h2>
            
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">13주 연속 100% 무결점</span>
                <span className={`text-xs ${textMuted} font-mono mt-1`}>(출처: 내 출석 기록)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">34일 연속 리추얼 달성</span>
                <span className={`text-xs ${textMuted} font-mono mt-1`}>(출처: 리추얼 기록)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-tight">마일스톤 전 과제 완수</span>
                <span className={`text-xs ${textMuted} font-mono mt-1`}>(출처: 내 제출 현황)</span>
              </div>
            </div>
          </div>
          
          <div className={`text-base leading-relaxed space-y-4 max-w-3xl ${textMuted}`}>
            <p className={`font-semibold text-lg ${textMain} mb-4`}>
              "데이터 흐름을 추적해 정합성을 지키고 시스템의 신뢰를 높입니다."
            </p>
            <p>
              단순히 기능이 동작하는 것에 만족하지 않고, 성능 병목의 근본 원인을 파악할 때까지 집요하게 파고듭니다. 문제가 발생했을 때는 통제 가능한 변수부터 하나씩 조율하며 해결책을 찾고, 해결 과정을 팀의 자산으로 만들어 반복적인 소통 비용을 줄이는 데 집중합니다.
            </p>
            
            <details className={`group border ${borderLight} rounded-lg p-4 transition-colors hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer mt-6`}>
              <summary className={`font-semibold text-sm ${textMain} list-none flex items-center justify-between`}>
                <span>개발자 강아름의 상세 스토리 읽어보기</span>
                <span className="text-lg opacity-50 group-open:rotate-180 transition-transform">↓</span>
              </summary>
              <div className={`mt-6 space-y-5 text-sm leading-loose border-t ${borderLight} pt-4`}>
                <p>
                  제가 가진 <strong>34일 연속 리추얼 달성(출처: 리추얼 기록)</strong>이라는 숫자는 결코 매일 조건 없이 순탄하게 얻어진 것이 아닙니다. 2026년 7월 13일 저녁, 광안리 해변에서 달리기를 하던 중 저는 한계에 부딪혀 멈춰야만 했습니다. 숨이 차오르고 갈비뼈까지 아팠지만, 힘들게 만든 루틴이 끊길까 봐 불안했습니다. 하지만 좌절하는 대신, 그날의 조건(긴 바지, 수면 부족, 늦은 식사)을 분석하고 다음 날 반바지, 충분한 수면, 가벼운 식사로 환경을 바꾼 뒤 7월 15일에 다시 달려 완주해 냈습니다. 이 경험을 통해 저는 문제가 생겼을 때 스스로를 탓하기보다 내가 바꿀 수 있는 통제 가능한 '조건'을 찾아 조율하는 <strong>자기조절력</strong>을 배웠습니다.
                </p>
                <p>
                  이러한 태도는 개발 실무에서도 문제를 정면으로 돌파하는 원동력이 되었습니다. 다이어리 앱의 계정 삭제 기능을 구현할 때, 계정을 삭제해도 다른 브라우저에서 여전히 로그인이 되는 치명적인 버그가 발생했습니다. 자동화 테스트를 통과했음에도 콘솔 창에는 빨간 줄이 가득했습니다. 답답한 상황이었지만 달리기 때처럼 '조건'을 통제하며 딥다이브했고, 실제 데이터가 아닌 로컬 스토리지에만 삭제 표시(안티패턴)를 남기고 있다는 진짜 원인을 찾아냈습니다. 이후 클라우드 삭제 → 마커 기록 → 세션 종료라는 명확한 순서를 명시하여 버그를 해결했습니다. 이처럼 저는 낯선 오류 앞에서도 도망치지 않고, 당장 바꿀 수 있는 코드와 로직의 조건부터 파악하는 <strong>자기동기력</strong>을 갖추게 되었습니다.
                </p>
                <p>
                  나아가 저는 개인의 문제 해결을 넘어, 팀의 효율과 시스템의 지속 가능성을 고민하는 개발자로 성장했습니다. 전자결재 연동 업무가 명확한 매뉴얼 없이 진행되어 작업 병목과 소통 착오가 잦았을 때, 특정 인원에게 쏠린 의존성을 낮추기 위해 저는 API 호출 순서, 에러 코드 대응 가이드, 테스트 시나리오를 위키에 상세히 문서화했습니다. 그 결과 누구나 쉽게 연동하고 검증할 수 있는 환경이 조성되어 부서 간 커뮤니케이션 비용을 획기적으로 줄였습니다. 동료의 피드백을 수용하고 해결 과정을 지식으로 나누는 <strong>대인관계력</strong>은 제 중요한 무기가 되었습니다. 
                </p>
                <p>
                  저는 눈앞의 문제를 집요하게 파고들어 비효율적인 쿼리를 3분에서 10초 이내로 튜닝해 내는 개발자입니다. 일상의 약속을 지키는 꾸준함, 환경을 바꾸어 재도전하는 회복탄력성, 그리고 해결 과정을 지식으로 나누어 팀의 성장을 돕는 태도를 바탕으로 어떠한 오류 앞에서도 멈추지 않고 시스템을 단단하게 지탱하겠습니다.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Experience Showcase */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <h2 className="text-2xl font-bold tracking-tight border-b pb-4">Work Experience</h2>
          
          <div className="space-y-8 pt-2">
            
            {/* Project 1 */}
            <div className={`p-6 rounded-2xl border ${borderLight} ${cardBg} shadow-sm transition-all hover:shadow-md`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">티시스 (Tsis)</h3>
                  <p className={`text-sm ${textMuted}`}>개발 부서 선임 연구원 | 2024.10 ~ 2025.10</p>
                </div>
              </div>
              
              <div className="space-y-6 mt-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className={`font-semibold ${textMain}`}>물류 주문 수집 배치 및 엑셀 자동화</h4>
                  </div>
                  <p className={`text-sm leading-relaxed ${textMuted} mb-3`}>
                    수기 엑셀 업로드로 인한 양식 불일치 오류와 CS 대응 공수를 줄이기 위해, Python 기반 스크래핑 및 데이터 정제 데몬(Daemon) 파이프라인을 설계했습니다. 유효성 검증을 자동화하여 실무자의 <strong>일평균 수기 업무를 2시간 절감</strong>하고 데이터 정합성 오류를 원천 차단했습니다.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${borderLight} bg-black/5 dark:bg-white/5`}>Python</span>
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${borderLight} bg-black/5 dark:bg-white/5`}>Spring Boot</span>
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${borderLight} bg-black/5 dark:bg-white/5`}>Oracle</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className={`p-6 rounded-2xl border ${borderLight} ${cardBg} shadow-sm transition-all hover:shadow-md`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">더존비즈온 (Douzone Bizon)</h3>
                  <p className={`text-sm ${textMuted}`}>SCM 개발 Unit 연구원 | 2022.02 ~ 2024.03</p>
                </div>
              </div>
              
              <div className="space-y-8 mt-6">
                <div>
                  <h4 className={`font-semibold ${textMain} mb-2`}>ERP 웹 재고 현황 조회 쿼리 성능 튜닝</h4>
                  <p className={`text-sm leading-relaxed ${textMuted} mb-3`}>
                    SCM 모듈 재고 조회 시 다중 조인 및 미사용 컬럼 데이터 호출로 인해 최대 3~5분이 소요되는 심각한 성능 병목이 발생했습니다. 서브쿼리를 WITH절 기반의 임시 테이블 형태로 모듈화하고 데이터 접근 경로를 최적화하여 <strong>조회 성능을 10초 이내로 대폭 단축</strong>시켰습니다.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${borderLight} bg-black/5 dark:bg-white/5`}>SQL Tuning</span>
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${borderLight} bg-black/5 dark:bg-white/5`}>Oracle</span>
                  </div>
                </div>

                <div className={`w-full h-px ${borderLight}`} />

                <div>
                  <h4 className={`font-semibold ${textMain} mb-2`}>전자결재(아마란스/비즈박스) 연동 표준화</h4>
                  <p className={`text-sm leading-relaxed ${textMuted} mb-3`}>
                    전자결재 연동 작업이 개인의 경험에만 의존해 담당자 부재 시 작업 병목이 발생하던 문제를 해결했습니다. API 호출 Sequence, 에러 코드 대응 가이드, 테스트 시나리오를 사내 위키에 명문화하여 부서 간 통신 스펙 착오를 방지했습니다.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${borderLight} bg-black/5 dark:bg-white/5`}>Spring Boot</span>
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${borderLight} bg-black/5 dark:bg-white/5`}>REST API</span>
                    <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${borderLight} bg-black/5 dark:bg-white/5`}>Documentation</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Projects */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <h2 className="text-2xl font-bold tracking-tight border-b pb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            
            {/* Card 1 */}
            <div className={`flex flex-col group rounded-2xl border ${borderLight} ${cardBg} overflow-hidden shadow-sm transition-all hover:shadow-md`}>
              <div className="p-1">
                <img 
                  src="/fido2-preview.png" 
                  alt="FIDO2 PoP Gateway Architecture" 
                  className={`w-full aspect-video object-cover rounded-xl border ${borderLight}`} 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-blue-500 transition-colors">FIDO2 기반 PoP 역방향 프록시 (논문)</h3>
                <div className="mt-auto">
                  <a href="https://altdmfk.github.io/fido2-pop-gateway/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-sm font-medium ${textMuted} hover:${textMain} transition-colors`}>
                    <span>View Abstract</span>
                    <ArrowUpRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={`flex flex-col group rounded-2xl border ${borderLight} ${cardBg} overflow-hidden shadow-sm transition-all hover:shadow-md`}>
              <div className="p-1">
                <div className={`w-full aspect-video rounded-xl border ${borderLight} bg-gradient-to-br ${theme === 'dark' ? 'from-slate-800 to-slate-900' : 'from-slate-100 to-slate-200'} flex items-center justify-center`}>
                  <div className={`text-sm font-mono tracking-widest uppercase ${textMuted}`}>[출시 예정]</div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-blue-500 transition-colors">System Architecture Monitoring (앱)</h3>
                <div className="mt-auto">
                  <span className={`inline-flex items-center text-sm font-medium ${textMuted} opacity-50 cursor-not-allowed`}>
                    <span>Coming Soon</span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
