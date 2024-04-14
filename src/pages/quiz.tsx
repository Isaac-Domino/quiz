import React, { Dispatch, SetStateAction } from "react";
import Questions from "./questions.json";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";
import { PartyPopperIcon } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/router";
type Question = {
  question: string;
  answers: string[];
  correct: number;
};

const QuestionComponent = ({
  Q,
  setPoint,
  setQuestionsAnswered,
}: {
  Q: Question;
  setPoint: Dispatch<SetStateAction<number>>;
  setQuestionsAnswered: Dispatch<SetStateAction<number>>;
}) => {
  const [answerIndex, setAnswerIndex] = useState(-1);
  const [isAnswered, setIsAnswered] = useState(false);
  return (
    <div className="shadow-md shadow-primary/50 border-border p-4 rounded-xl bg-primary ">
      <h5 className="text-center">{Q.question}</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-5">
        {Q.answers.map((item, index) => (
          <Button
            className="w-80 text-wrap h-fit"
            disabled={isAnswered}
            onClick={() => {
              setIsAnswered(true);
              setQuestionsAnswered((p) => p + 1);
              setAnswerIndex(index);
              if (Q.correct === Q.answers.indexOf(item)) {
                setPoint((p) => p + 1);
              }
            }}
            variant={index === answerIndex ? "default" : "outline"}
          >
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

const Index = () => {
  const [point, setPoint] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  return (
    <div className="-z-10 w-full h-fit">
      <main className="w-full max-w-3xl mx-auto">
        <h1 className="text-center">GOODLUCK EVERYONE!</h1>
        <div className="flex flex-col gap-5 p-10 justify-between items-center">
          {Questions.map((item: Question, index) => (
            <QuestionComponent
              Q={item}
              setPoint={setPoint}
              setQuestionsAnswered={setQuestionsAnswered}
            />
          ))}
          {!isSubmitted && (
            <Button
              disabled={questionsAnswered !== Questions.length}
              onClick={() => setIsSubmitted(true)}
            >
              SUBMIT
            </Button>
          )}
          {isSubmitted && (
            <div className="fixed inset-0 flex flex-col gap-3 justify-center items-center z-50 bg-background/80 backdrop-blur-sm">
              <Alert className="w-full max-w-md">
                <PartyPopperIcon size={16} />
                <AlertTitle>Your Scores is</AlertTitle>
                <AlertDescription>
                  {(point / Questions.length) * 100 > 50
                    ? `Congrats po ang taas haha ${point}`
                    : `Ginagawamue bakit ang baba haha :${point}`}
                </AlertDescription>
              </Alert>
              <SignOutButton
                signOutCallback={() => {
                  router.push("/");
                }}
              >
                <Button>EXIT</Button>
              </SignOutButton>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;
