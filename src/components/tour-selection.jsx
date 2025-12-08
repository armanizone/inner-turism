"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  AlarmClock,
  CalendarClock,
  CalendarRange,
  Phone,
  MessageCircle,
  Hourglass,
  CalendarDays,
} from "lucide-react";
import { Slider } from "./ui/slider";

const type = [
  { id: "turism", label: "Туризм" },
  { id: "resorts", label: "Санатории" },
];

const datesToGo = [
  { id: "soon", label: "В самое ближайшее время", icon: AlarmClock },
  { id: "weeks", label: "Не ранее чем через 2-3 недели", icon: CalendarClock },
  { id: "months", label: "Через 1-2 месяца", icon: CalendarRange },
  { id: "later", label: "Не ранее чем через 2 месяца", icon: CalendarDays },
  { id: "idk", label: "Пока не планирую", icon: Hourglass },
];

const ration = [
  { id: "all", label: "Все включено" },
  { id: "breakfast-dinner", label: "Завтра+ужин" },
  { id: "breakfast", label: "Завтрак" },
  { id: "triple", label: "Завтрак+обед+ужин" },
  { id: "none", label: "Без питания" },
  { id: "idk", label: "Пока не знаю" },
];

const people = [
  { id: "adult", label: "1 взрослый" },
  { id: "two-adults", label: "2 взрослых" },
  { id: "adult-kid", label: "1 взрослый + ребенок" },
  { id: "two-adults-kid", label: "2 взрослых + ребенок" },
  { id: "two-adults-two-kids", label: "2 взрослых + 2 ребенка" },
  { id: "three-adults", label: "3 взрослых" },
];

const contacts = [
  { id: "wa", label: "WhatsApp", icon: MessageCircle },
  { id: "phone", label: "Номер телефона", icon: Phone },
];

export function TourSelectionDialog() {
  const [open, setOpen] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedTimeframe, setSelectedTimeframe] = React.useState("");
  const [selectedContact, setSelectedContact] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const [selectedRation, setSelectedRation] = React.useState("");
  const [selectedPeople, setSelectedPeople] = React.useState("");
  const [customPeople, setCustomPeople] = React.useState("")

  const handlePeopleChange = (value) => {
    setSelectedPeople(value);
    setCustomPeople('')
    setTimeout(() => {
      setStep(6);
    }, 300);
  };

  const handleRationChange = (value) => {
    setSelectedRation(value);
    setTimeout(() => {
      setStep(5);
    }, 300);
  };

  // Add state for tour duration selection
  const [tourDuration, setTourDuration] = React.useState("");

  const totalSteps = 7;
  const progress = (step / totalSteps) * 100;

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
    setTimeout(() => {
      setStep(2);
    }, 300);
  };

  const handleTimeframeChange = (value) => {
    setSelectedTimeframe(value);
    setTimeout(() => {
      setStep(3);
    }, 300);
  };

  const handleContactChange = (value) => {
    setSelectedContact(value);
    setTimeout(() => {
      setStep(7);
    }, 300);
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleSubmit = () => {
    console.log({
      country: selectedCountry,
      timeframe: selectedTimeframe,
      contactMethod: selectedContact,
      name,
      phone,
    });
    setOpen(false);
    // Reset on close
    setTimeout(() => {
      setStep(1);
      setSelectedCountry("");
      setSelectedTimeframe("");
      setSelectedContact("");
      setName("");
      setPhone("");
    }, 300);
  };

  const canProceed =
    (step === 1 && selectedCountry) ||
    (step === 2 && selectedTimeframe) ||
    (step === 3 && tourDuration) ||
    (step === 4 && selectedRation) ||
    (step === 5 && (selectedPeople || customPeople)) ||
    (step === 6 && selectedContact) ||
    (step === 7 && name && phone);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg">Спланировать поездку</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] h-full max-h-[600px] overflow-hidden p-0">
        <div className="relative overflow-hidden">
          {/* Sliding container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(step - 1) * 100}%)` }}
          >
            {/* Step 1: Country Selection */}
            <div className="min-w-full p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl">Выберите направление</DialogTitle>
              </DialogHeader>
              <div className="mt-6 max-h-[600px]">
                <RadioGroup
                  value={selectedCountry}
                  onValueChange={handleCountryChange}
                >
                  <div className="gap-3 grid grid-cols-2 mr-3">
                    {type.map((country) => (
                      <div
                        key={country.id}
                        className="flex items-center space-x-3 border p-3 rounded-xl"
                      >
                        <RadioGroupItem value={country.id} id={country.id} />
                        <Label
                          htmlFor={country.id}
                          className="text-base font-normal cursor-pointer flex-1"
                        >
                          {country.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="min-w-full p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  Когда планируете?
                </DialogTitle>
              </DialogHeader>
              <div className="mt-6">
                <RadioGroup
                  value={selectedTimeframe}
                  onValueChange={handleTimeframeChange}
                >
                  <div className="grid grid-cols-2 gap-4">
                    {datesToGo.map((date) => (
                      <div
                        key={date.id}
                        className="flex items-center space-x-3 border p-3 rounded-xl"
                      >
                        <RadioGroupItem value={date.id} id={date.id} />
                        <Label
                          htmlFor={date.id}
                          className="text-base font-normal cursor-pointer flex-1 flex items-center gap-2"
                        >
                          {date.icon && (
                            <span className="inline-flex items-center">
                              <date.icon className="h-5 w-5" />
                            </span>
                          )}
                          {date.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="min-w-full p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  Какая интересует продолжительность тура?
                </DialogTitle>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                <div className="flex items-center justify-between">
                  <Input
                    id="duration-input"
                    // type="number"
                    // min={5}
                    // max={28}
                    value={tourDuration}
                    onChange={(e) => {
                      console.log(e?.target?.value, "zxc");
                      setTourDuration(Number(e.target.value));
                    }}
                    className="w-20"
                  />
                </div>
                <Slider
                  id="duration-slider"
                  min={5}
                  max={28}
                  defaultValue={[5]}
                  onValueChange={(e) => {
                    setTourDuration(Number(e));
                  }}
                  className="w-full"
                />
                <div className="grid place-items-center min-h-full w-full">
                  <Label
                    htmlFor="duration-slider"
                    className="text-base font-normal"
                  >
                    Дней: {tourDuration}
                  </Label>
                </div>
              </div>
            </div>

            <div className="min-w-full p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  Какой тип питания предпочитаете?
                </DialogTitle>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                <RadioGroup
                  value={selectedRation}
                  onValueChange={handleRationChange}
                >
                  <div className="gap-3 grid grid-cols-2">
                    {ration.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center space-x-3 border p-3 rounded-xl"
                      >
                        <RadioGroupItem value={option.id} id={option.id} />
                        <Label
                          htmlFor={option.id}
                          className="text-base font-normal cursor-pointer flex-1"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="min-w-full p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  Каким составом поедете?
                </DialogTitle>
              </DialogHeader>

              <div className="mt-6 space-y-6">
                <RadioGroup
                  value={selectedPeople}
                  onValueChange={handlePeopleChange}
                >
                  <div className="gap-3 grid grid-cols-2">
                    {people.map((option) => (
                      <div
                        key={option.id}
                        className="flex items-center space-x-3 border p-3 rounded-xl"
                      >
                        <RadioGroupItem value={option.id} id={option.id} />
                        <Label
                          htmlFor={option.id}
                          className="text-base font-normal cursor-pointer flex-1"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
                <Input
                  placeholder="Другое"
                  className="max-w-96"
                  value={customPeople}
                  onChange={(e) => {
                    setCustomPeople(e?.target?.value);
                    setSelectedPeople("")
                  }}
                />
              </div>
            </div>

            <div className="min-w-full p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  Как с вами связаться?
                </DialogTitle>
              </DialogHeader>
              <div className="mt-6">
                <RadioGroup
                  value={selectedContact}
                  onValueChange={handleContactChange}
                >
                  <div className="space-y-3">
                    {contacts.map((contact) => {
                      const Icon = contact.icon;
                      return (
                        <div
                          key={contact.id}
                          className="flex items-center space-x-3 border p-3 rounded-xl"
                        >
                          <RadioGroupItem value={contact.id} id={contact.id} />
                          <Label
                            htmlFor={contact.id}
                            className="text-base font-normal cursor-pointer flex-1 flex items-center gap-2"
                          >
                            <Icon className="h-5 w-5" />
                            {contact.label}
                          </Label>
                        </div>
                      );
                    })}
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="min-w-full p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl">Ваши контакты</DialogTitle>
              </DialogHeader>
              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Номер телефона</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    placeholder="Введите ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex justify-center">
                  <Button size="lg">Подберите мне тур</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar and Navigation Buttons */}
        <div className="px-6 pb-6 space-y-4 mt-auto">
          <div className="space-y-2">
            <div className="flex gap-2 text-sm text-muted-foreground">
              <span>Готово:</span>
              <span className="text-primary">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex justify-between items-center">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Назад
              </Button>
            )}
            {step !== totalSteps && (
              <Button
                onClick={step === totalSteps ? handleSubmit : handleNext}
                disabled={!canProceed}
                className="ml-auto"
              >
                Далее
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
