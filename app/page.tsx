"use client";

import React, { useState } from 'react';
import { Moon, Sun, ArrowUpRight, Mail } from 'lucide-react';
import story from '../content/story.json';
import metrics from '../public/metrics.json';
import approved from '../public/approved_paragraphs.json';

export default function PortfolioPage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const renderRecord = (c: { id: string; ability: string; date: string; evidence: string; text: string }) => (
    <li key={c.id} className={`text-sm leading-relaxed ${textMuted}`}>
      <span className={`font-semibold ${textMain}`}>{c.ability}</span>
      <span className="font-mono text-xs ml-2">{c.date} · {c.evidence}</span>
      <p className="mt-1">{c.text}</p>
    </li>
  );

  // Aesthetic definitions
  const bgMain = theme === 'dark' ? 'bg-[#000000]' : 'bg-[#F6F1E7]';
  const textMain = theme === 'dark' ? 'text-[#EDEDED]' : 'text-[#171717]';
  const textMuted = theme === 'dark' ? 'text-[#A1A1AA]' : 'text-[#71717A]';
  const borderLight = theme === 'dark' ? 'border-[#27272A]' : 'border-[#E3DCCB]';
  const cardBg = theme === 'dark' ? 'bg-[#0A0A0A]' : 'bg-[#FCFAF4]';
  const buttonClass = `inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors border ${theme === 'dark' ? 'bg-[#EDEDED] text-[#000000] border-transparent hover:bg-[#D4D4D8]' : 'bg-[#171717] text-[#FFFFFF] border-transparent hover:bg-[#27272A]'}`;
  const secondaryButtonClass = `inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors border ${theme === 'dark' ? 'bg-transparent text-[#EDEDED] border-[#27272A] hover:bg-[#27272A]' : 'bg-transparent text-[#171717] border-[#E4E4E7] hover:bg-[#EFE9DA]'}`;

  return (
    <div className={`min-h-screen ${bgMain} ${textMain} font-sans selection:bg-blue-500/30 transition-colors duration-300`}>
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${borderLight} ${theme === 'dark' ? 'bg-[#000000]/80' : 'bg-[#F6F1E7]/80'}`}>
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

      <main className="max-w-5xl mx-auto px-6 pt-24 pb-12 space-y-12">
        
        {/* Hero Section */}
        <section className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className={`text-sm font-medium tracking-wide ${textMuted}`}>
            강아름 (Areum Kang)
          </h1>
          <p className="text-2xl md:text-3xl font-bold tracking-tight leading-snug max-w-3xl">
            "{story.oneLiner}"
          </p>
          <div className={`flex flex-wrap items-center gap-6 pt-2 text-sm font-medium ${textMuted}`}>
            <a href="#story">이야기</a>
            <a href="#numbers">숫자</a>
            <a href="#works">대표작</a>
            <a href="#resume">이력서</a>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="mailto:xnzktcm@naver.com" className={`${buttonClass} px-6`}>
              <Mail size={16} />
              <span className="font-mono text-sm tracking-wide">xnzktcm@naver.com</span>
            </a>
            <a href="#resume" className={secondaryButtonClass}>
              <ArrowUpRight size={16} />
              <span>이력서 보기</span>
            </a>
          </div>
        
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 pt-3`}>
            {[
              { k: '경력', v: '웹 개발 약 3년', s: '더존비즈온 · 티시스' },
              { k: '쿼리 개선', v: '3분 → 10초', s: '재고 조회 리팩토링' },
              { k: '자동화', v: '하루 2시간 절감', s: 'Python 주문 수집 배치' },
              { k: '꾸준함', v: '37일 중 37일 기록', s: '리추얼 기록 · 출석 100%' },
            ].map((g) => (
              <div key={g.k} className={`p-4 rounded-xl border ${borderLight} ${cardBg}`}>
                <div className={`text-xs ${textMuted}`}>{g.k}</div>
                <div className="font-bold mt-1 leading-snug">{g.v}</div>
                <div className={`text-xs mt-1 ${textMuted}`}>{g.s}</div>
              </div>
            ))}
          </div>
          <p className={`text-sm ${textMuted}`}>Java(Spring) · JavaScript · Oracle · Python · 정보처리기사 · SQLD</p>        </section>

        {/* 이야기 (본편) — 본문은 content/story.json, 숫자는 장치가 만든 public/metrics.json */}
        <section id="story" className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <h2 className="text-xl font-bold tracking-tight border-b pb-2">나의 이야기</h2>

          <div className="space-y-4 max-w-3xl">
            {story.segments.map((s: { id: string; date: string | null; ability: string | null; text: string }) => (
              <div key={s.id} className="space-y-2">
                {(s.date || s.ability) && (
                  <div className={`flex flex-wrap items-center gap-2 text-xs font-mono ${textMuted}`}>
                    {s.date && <span>{s.date}</span>}
                    {s.ability && (
                      <span className={`px-2 py-0.5 rounded-md border ${borderLight}`}>{s.ability}</span>
                    )}
                  </div>
                )}
                <p className={`text-base leading-loose ${textMuted}`}>{s.text}</p>

                {/* 고난 장면과 짝지은 숫자: 달리기 루틴 ↔ 리추얼 기록 */}
                {s.id === 'run-conditions' && (
                  <div className={`mt-3 p-4 rounded-lg border ${borderLight} ${cardBg} text-sm`}>
                    <span className={`font-semibold ${textMain}`}>이 장면과 짝지은 숫자 · {metrics.ritual.value}</span>
                    <p className={`mt-1 ${textMuted}`}>
                      조건을 바꿔 다시 하는 방식은 하루를 열고 닫는 기록으로 이어졌다. {metrics.ritual.detail}
                    </p>
                    <span className={`text-xs font-mono ${textMuted}`}>(출처: {metrics.ritual.source})</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 숫자 */}
        <section id="numbers" className="space-y-6">
          <h2 className="text-xl font-bold tracking-tight border-b pb-2">숫자</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.values(metrics).map((m) => (
              <div key={m.label} className={`p-5 rounded-xl border ${borderLight} ${cardBg}`}>
                <div className={`text-xs ${textMuted}`}>{m.label}</div>
                <div className="text-xl font-bold mt-1">{m.value}</div>
                <div className={`text-xs mt-2 ${textMuted}`}>{m.detail}</div>
                <div className={`text-xs font-mono mt-2 ${textMuted}`}>(출처: {m.source})</div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Showcase */}
        <section className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <h2 id="resume" className="text-xl font-bold tracking-tight border-b pb-2 scroll-mt-24">이력서</h2>
          
          <div className="space-y-4 pt-1">
            
            {/* Project 1 */}
            <div className={`p-6 rounded-2xl border ${borderLight} ${cardBg} shadow-sm transition-all hover:shadow-md`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">티시스 (Tsys)</h3>
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
              
              <div className="space-y-5 mt-4">
                <div>
                  <h4 className={`font-semibold ${textMain} mb-2`}>ERP 웹 재고 현황 조회 쿼리 성능 튜닝</h4>
                  <p className={`text-sm leading-relaxed ${textMuted} mb-3`}>
                    SCM 모듈 재고 조회 시 다중 조인 및 미사용 컬럼 데이터 호출로 인해 3분 이상 걸리는 성능 병목이 있었습니다. 서브쿼리를 WITH절 기반의 임시 테이블 형태로 모듈화하고 데이터 접근 경로를 최적화하여 <strong>조회 시간을 3분에서 10초로 단축</strong>시켰습니다.
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
        
          <div className={`p-6 rounded-2xl border ${borderLight} ${cardBg} text-sm leading-relaxed space-y-3`}>
            <p><span className="font-semibold">기술</span> · Java(Spring Boot), JavaScript, Oracle, Python, Git</p>
            <p><span className="font-semibold">자격증</span> · 정보처리기사(2025.06) · SQLD(2021.09) · 무역영어 1급(2019.06)</p>
            <p><span className="font-semibold">학력</span> · 한국방송통신대학교 컴퓨터과학과 편입 재학(3.8/4.5, 2025.03~2027.02) · 고려대학교(세종) 독일학 졸업(2020.02)</p>
            <p className={textMuted}>문의 · xnzktcm@naver.com</p>
          </div>        </section>

        {/* Projects (대표작) */}
        <section id="works" className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <h2 className="text-xl font-bold tracking-tight border-b pb-2">대표작</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Card 1: 논문 (10번) */}
            <div className={`flex flex-col group rounded-2xl border ${borderLight} ${cardBg} overflow-hidden shadow-sm transition-all hover:shadow-md`}>
              <div className="p-1">
                <img 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/fido2-preview.png`} 
                  alt="FIDO2 PoP Gateway Architecture" 
                  className={`w-full aspect-video object-cover rounded-xl border ${borderLight}`} 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className={`text-xs font-mono mb-2 ${textMuted}`}>논문</p>
                <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-blue-500 transition-colors">FIDO2 하드웨어 격리 키 기반 Proof-of-Possession 역방향 프록시 게이트웨이의 설계 및 성능 분석</h3>
                <div className="mt-auto">
                  <a href="https://altdmfk.github.io/fido2-pop-gateway/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center text-sm font-medium ${textMuted} hover:${textMain} transition-colors`}>
                    <span>논문 보기</span>
                    <ArrowUpRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: 앱 자리 (13번) */}
            <div className={`flex flex-col group rounded-2xl border ${borderLight} ${cardBg} overflow-hidden shadow-sm transition-all hover:shadow-md`}>
              <div className="p-1">
                <div className={`w-full aspect-video rounded-xl border ${borderLight} bg-gradient-to-br ${theme === 'dark' ? 'from-slate-800 to-slate-900' : 'from-slate-100 to-slate-200'} flex items-center justify-center`}>
                  <div className={`text-sm font-mono tracking-widest uppercase ${textMuted}`}>[13번 과제 · 2026년 10월 중 공개 예정]</div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className={`text-xs font-mono mb-2 ${textMuted}`}>앱</p>
                <h3 className="font-bold text-lg mb-3 leading-tight">앱 (준비 중)</h3>
                <div className="mt-auto">
                  <span className={`inline-flex items-center text-sm font-medium ${textMuted} opacity-50 cursor-not-allowed`}>
                    <span>Coming Soon</span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 승인된 최근 기록 (장치가 만든 approved_paragraphs.json) */}
        {approved.approved.length > 0 && (
          <section id="records" className="space-y-6">
            <h2 className="text-xl font-bold tracking-tight border-b pb-2">최근 기록</h2>
            <ul className="space-y-3">
              {approved.approved.slice(0, 2).map(renderRecord)}
            </ul>
            {approved.approved.length > 2 && (
              <details className={`group border ${borderLight} rounded-lg p-3`}>
                <summary className={`cursor-pointer text-sm font-medium ${textMain}`}>
                  기록 {approved.approved.length - 2}개 더 보기
                </summary>
                <ul className="space-y-3 mt-3">
                  {approved.approved.slice(2).map(renderRecord)}
                </ul>
              </details>
            )}
          </section>
        )}

      </main>
    </div>
  );
}
