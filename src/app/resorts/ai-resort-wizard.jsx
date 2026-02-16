"use client"

import { useState, useRef, useEffect } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Sparkles,
  ArrowLeft,
  Send,
  User,
  Bot,
  CheckCircle2,
  ChevronRight,
  Loader2,
  Phone,
  UserCircle,
} from "lucide-react"

const cities = [
  "Астана", "Алматы", "Актау", "Атырау", "Актобе", "Уральск", "Костанай",
  "Петропавловск", "Кокшетау", "Павлодар", "Семей", "Усть-Каменогорск",
  "Караганды", "Жезказган", "Кызылорда", "Конаев", "Талдыкорган",
  "Туркистан", "Тараз", "Шымкент",
]

const diseases = {
  "Опорно-двигательный аппарат": [
    "Остеохондроз", "Артрозы, артриты (в стадии ремиссии)", "Сколиоз, кифоз",
    "Радикулит", "Последствия травм и операций", "Плоскостопие",
  ],
  "Сердечно-сосудистая система": [
    "Ишемическая болезнь сердца (стабильная)", "Артериальная гипертензия I\u2013II степени",
    "Вегетососудистая дистония", "Реабилитация после инфаркта (по показаниям)",
    "Хроническая сердечная недостаточность I ст.",
  ],
  "Органы дыхания": [
    "Хронический бронхит", "Бронхиальная астма (вне обострения)", "Частые ОРВИ",
    "ХОБЛ (лёгкая форма)", "Реабилитация после пневмонии / COVID",
  ],
  "Нервная система": [
    "Неврозы", "Хронический стресс", "Синдром хронической усталости",
    "Нарушения сна", "Последствия инсульта (реабилитация)", "Вегетативные расстройства",
  ],
  "Желудочно-кишечный тракт": [
    "Гастрит", "Язвенная болезнь (ремиссия)", "Холецистит",
    "Панкреатит (хронический)", "Синдром раздражённого кишечника", "Нарушения обмена веществ",
  ],
  "Эндокринная система и обмен веществ": [
    "Сахарный диабет 2 типа (компенсированный)", "Ожирение I\u2013II степени",
    "Метаболический синдром", "Заболевания щитовидной железы (вне обострения)",
  ],
  "Урология и гинекология": [
    "Хронический цистит", "Пиелонефрит (ремиссия)", "Простатит",
    "Гинекологические воспалительные заболевания (хронические)",
    "Нарушения репродуктивной функции (по показаниям)",
  ],
  "Кожные заболевания": [
    "Псориаз (вне обострения)", "Экзема", "Атопический дерматит", "Нейродермит",
  ],
  "Детские показания": [
    "Сколиоз, нарушение осанки", "Частые простудные заболевания",
    "Аденоиды", "Плоскостопие", "Неврологические нарушения лёгкой степени",
  ],
  "Реабилитация и общее оздоровление": [
    "Послеоперационное восстановление", "После травм",
    "После COVID-19", "Снижение иммунитета", "Переутомление, стресс",
  ],
}

const diseaseCategories = Object.keys(diseases)

const steps = [
  {
    id: "age",
    question: "Для начала, укажите ваш возраст.",
    type: "select",
    options: ["18-25", "26-35", "36-45", "46-55", "56-65", "65+"],
  },
  {
    id: "gender",
    question: "Укажите ваш пол.",
    type: "select",
    options: ["Мужской", "Женский"],
  },
  {
    id: "disability",
    question: "Есть ли у вас инвалидность?",
    type: "select",
    options: ["Нет", "1 группа", "2 группа", "3 группа"],
  },
  {
    id: "mobility",
    question: "Есть ли ограничения по передвижению?",
    type: "select",
    options: ["Нет", "Есть"],
  },
  {
    id: "city",
    question: "Из какого вы города?",
    type: "select",
    options: cities,
  },
  {
    id: "disease_category",
    question: "Какое направление лечения вас интересует?",
    type: "select",
    options: diseaseCategories,
  },
  {
    id: "disease",
    question: "Уточните заболевание или причину обращения.",
    type: "select",
    dependsOn: "disease_category",
    dynamicOptions: (answers) => diseases[answers.disease_category] || [],
  },
  {
    id: "stage",
    question: "Какая стадия заболевания?",
    type: "select",
    options: ["Ремиссия", "Восстановление", "Хроническое течение", "Оздоровление"],
  },
  {
    id: "comorbid_category",
    question: "Есть ли сопутствующие заболевания? Если да, укажите направление.",
    type: "select",
    options: ["Нет сопутствующих заболеваний", ...diseaseCategories],
  },
  {
    id: "doctor_referral",
    question: "Есть ли у вас направление от врача?",
    type: "select",
    options: ["Да", "Нет"],
  },
  {
    id: "destination",
    question: "В каком регионе вы хотели бы пройти лечение?",
    type: "select",
    options: ["Неважно", ...cities],
  },
  {
    id: "budget",
    question: "Какой у вас бюджет на путёвку?",
    type: "select",
    options: [
      "До 100 000 тенге",
      "100 000 \u2013 150 000 тенге",
      "150 000 \u2013 250 000 тенге",
      "250 000 \u2013 500 000 тенге",
      "Более 500 000 тенге",
    ],
  },
  {
    id: "contact_method",
    question: "Как удобнее с вами связаться?",
    type: "select",
    options: ["Звонок на номер телефона", "Написать на WhatsApp", "Написать на эл. почту"],
  },
  {
    id: "contact_info",
    question: "Последний шаг! Оставьте ваши контактные данные, и наш ассистент свяжется с вами в ближайшее время.",
    type: "contact",
  },
]

function TypingIndicator() {
  return (
    <div className="flex items-end gap-3">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/15 shrink-0">
        <Bot className="h-4 w-4 text-primary" />
      </div>
      <div className="bg-secondary/80 rounded-2xl rounded-bl-md px-5 py-3.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:0ms]" />
          <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:150ms]" />
          <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  )
}

export function AiResortWizard({ onClose }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [pendingAnswer, setPendingAnswer] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [completedSteps, setCompletedSteps] = useState([])
  const [isFinished, setIsFinished] = useState(false)
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const scrollRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsTyping(false), 1200)
    return () => clearTimeout(timer)
  }, [currentStep])

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [currentStep, isTyping, completedSteps, submitted])

  const handleAnswer = (value) => {
    setPendingAnswer(value)
  }

  const confirmAnswer = () => {
    if (!pendingAnswer) return
    const step = steps[currentStep]
    const newAnswers = { ...answers, [step.id]: pendingAnswer }
    setAnswers(newAnswers)
    setCompletedSteps((prev) => [...prev, currentStep])
    setPendingAnswer("")

    if (currentStep < steps.length - 1) {
      setIsTyping(true)
      setCurrentStep((prev) => prev + 1)
    } else {
      setIsFinished(true)
    }
  }

  const handleContactSubmit = () => {
    if (!phone || !name || !agreed) return
    setAnswers((prev) => ({ ...prev, phone, name }))
    setSubmitted(true)
  }

  const step = steps[currentStep]
  const options = step.dynamicOptions ? step.dynamicOptions(answers) : step.options
  const progressPercent = Math.round(((completedSteps.length) / steps.length) * 100)

  return (
    <div className="flex flex-col h-[75vh] max-h-[700px] bg-card rounded-[28px] border-2 border-primary/20 shadow-[0_0_0_4px_oklch(0.38_0.08_145/0.06),0_24px_80px_-12px_oklch(0.38_0.08_145/0.10)] overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-border/60 bg-card">
        <button
          onClick={onClose}
          className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-secondary transition-colors"
          type="button"
        >
          <ArrowLeft className="h-4 w-4 text-muted-foreground" />
        </button>
        <div className="flex items-center gap-2.5 flex-1">
          <div className="relative">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/15">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-card" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground leading-tight">Elim-AI</p>
            <p className="text-xs text-muted-foreground">Подбор санатория</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs font-medium text-primary">{progressPercent}%</p>
          <div className="w-20 h-1.5 bg-secondary rounded-full mt-1 overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Chat area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6 space-y-5 scroll-smooth">
        {/* Welcome message */}
        <div className="flex items-end gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/15 shrink-0">
            <Bot className="h-4 w-4 text-primary" />
          </div>
          <div className="max-w-[80%]">
            <div className="bg-secondary/80 rounded-2xl rounded-bl-md px-5 py-3.5">
              <p className="text-sm text-foreground leading-relaxed">
                Здравствуйте! Я цифровой ассистент <span className="font-semibold text-primary">Elim-AI</span>. Помогу подобрать идеальный санаторий. Ответьте на несколько вопросов, и я найду лучшие варианты для вас.
              </p>
            </div>
            <p className="text-[10px] text-muted-foreground/60 mt-1.5 ml-2">Elim-AI</p>
          </div>
        </div>

        {/* Completed steps */}
        {completedSteps.map((stepIdx) => {
          const s = steps[stepIdx]
          return (
            <div key={s.id}>
              {/* Bot question */}
              <div className="flex items-end gap-3 mb-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/15 shrink-0">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="max-w-[80%]">
                  <div className="bg-secondary/80 rounded-2xl rounded-bl-md px-5 py-3.5">
                    <p className="text-sm text-foreground leading-relaxed">{s.question}</p>
                  </div>
                </div>
              </div>
              {/* User answer */}
              <div className="flex items-end gap-3 justify-end">
                <div className="max-w-[80%]">
                  <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-5 py-3.5">
                    <p className="text-sm leading-relaxed">{answers[s.id]}</p>
                  </div>
                  <div className="flex items-center gap-1 justify-end mt-1.5 mr-2">
                    <CheckCircle2 className="h-3 w-3 text-primary/60" />
                    <p className="text-[10px] text-muted-foreground/60">Вы</p>
                  </div>
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 shrink-0">
                  <User className="h-4 w-4 text-primary/70" />
                </div>
              </div>
            </div>
          )
        })}

        {/* Submitted state */}
        {submitted ? (
          <div className="flex items-end gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/15 shrink-0">
              <Bot className="h-4 w-4 text-primary" />
            </div>
            <div className="max-w-[85%]">
              <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-bl-md px-6 py-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <p className="text-sm font-semibold text-foreground">Спасибо за вашу заявку!</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Цифровой ассистент <span className="font-semibold text-primary">Elim-AI</span> свяжется с вами в ближайшее время. Мы не передадим ваши данные третьим лицам и не будем отправлять вам спам.
                </p>
                <Button
                  onClick={onClose}
                  className="rounded-full px-6 h-10 gap-2"
                >
                  Подобрать санатории
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Current question */}
            {isTyping ? (
              <TypingIndicator />
            ) : (
              <div className="flex items-end gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/15 shrink-0">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="max-w-[80%]">
                  <div className="bg-secondary/80 rounded-2xl rounded-bl-md px-5 py-3.5 animate-in fade-in slide-in-from-bottom-2 duration-400">
                    <p className="text-sm text-foreground leading-relaxed">{step.question}</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Input area */}
      {!submitted && !isTyping && (
        <div className="border-t border-border/60 bg-card px-6 py-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {step.type === "select" ? (
            <div className="space-y-4">
              <Select value={pendingAnswer} onValueChange={handleAnswer}>
                <SelectTrigger className="rounded-xl h-12 bg-secondary/50 border-border/80 text-sm">
                  <SelectValue placeholder="Выберите ответ..." />
                </SelectTrigger>
                <SelectContent>
                  {options?.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                onClick={confirmAnswer}
                disabled={!pendingAnswer}
                className="w-full rounded-xl h-12 gap-2 text-sm font-medium"
              >
                <Send className="h-4 w-4" />
                Ответить
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="rounded-xl h-12 bg-secondary/50 border-border/80 pl-11 text-sm"
                />
              </div>
              <div className="relative">
                <UserCircle className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="rounded-xl h-12 bg-secondary/50 border-border/80 pl-11 text-sm"
                />
              </div>
              <div className="flex items-start gap-3 py-1">
                <Checkbox
                  id="agree"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(!!checked)}
                  className="mt-0.5"
                />
                <label htmlFor="agree" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                  Я соглашаюсь на обработку персональных данных согласно политике конфиденциальности
                </label>
              </div>
              <Button
                onClick={handleContactSubmit}
                disabled={!phone || !name || !agreed}
                className="w-full rounded-xl h-12 gap-2 text-sm font-medium"
              >
                {!phone || !name || !agreed ? (
                  <>
                    <Send className="h-4 w-4" />
                    Подобрать санатории
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Подобрать санатории
                  </>
                )}
              </Button>
            </div>
          )}

          {/* Step counter */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {steps.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i < completedSteps.length
                    ? "w-3 bg-primary"
                    : i === currentStep
                      ? "w-6 bg-primary/60"
                      : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
