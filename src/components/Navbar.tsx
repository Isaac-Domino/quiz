import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { useRouter } from "next/router";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="w-full max-w-5xl mx-auto bg-background h-24 flex items-center justify-between ">
      <h1 className="hidden md:block">QUIZ BY GROUP 1</h1>
      <h3 className="block md:hidden">QUIZ BY GROUP 1</h3>
      <div className="hidden gap-3 md:flex">
        {/* <Link
          href={"/login"}
          className={buttonVariants({ variant: "default" })}
        >
          LOGIN
        </Link>
        <Link
          href={"/register"}
          className={buttonVariants({ variant: "default" })}
        >
          REGISTER
        </Link> */}
        <SignedIn>
          <Link
            href={"/quiz"}
            className={buttonVariants({ variant: "default" })}
          >
            START QUIZ!
          </Link>
        </SignedIn>
        <SignedOut>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button variant={"secondary"}>INSTRUCTIONS</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>READ CAREFULLY</AlertDialogTitle>
                <AlertDialogDescription>
                  <div className="text-black text-start">
                    <h3>- Login/Register your account</h3> <br />
                    <h3>
                      - Sign up and wait for the verification code that has been
                      sent to your corresponding email
                    </h3>{" "}
                    <br />
                    <h3>
                      - Read carefully every question and avoid clicking the
                      button on accident, you CANNOT re-do your answer
                    </h3>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>
                  <Link
                    href={"/login"}
                    className={buttonVariants({ variant: "default" })}
                  >
                    Continue
                  </Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Link
            href={"/login"}
            className={buttonVariants({ variant: "secondary" })}
          >
            LOGIN
          </Link>
          <SignUpButton afterSignUpUrl="/quiz">
            <Button>REGISTER</Button>
          </SignUpButton>
        </SignedOut>
      </div>
      <div className="flex md:hidden">
        <SignedIn>
          <Link
            href={"/quiz"}
            className={buttonVariants({ variant: "default" })}
          >
            START QUIZ!
          </Link>
        </SignedIn>
        <SignedOut>
          <Popover>
            <PopoverTrigger asChild>
              <Button>MENU</Button>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col gap-2">
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button variant={"secondary"}>INSTRUCTIONS</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>READ CAREFULLY</AlertDialogTitle>
                    <AlertDialogDescription>
                      <div className="text-black text-start">
                        <h3>- Login/Register your account</h3> <br />
                        <h3>
                          - Sign up and wait for the verification code that has
                          been sent to your corresponding email
                        </h3>{" "}
                        <br />
                        <h3>
                          - Read carefully every question and avoid clicking the
                          button on accident, you CANNOT re-do your answer
                        </h3>
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>
                      <Link
                        href={"/login"}
                        className={buttonVariants({ variant: "default" })}
                      >
                        Continue
                      </Link>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
              <Link
                href={"/login"}
                className={buttonVariants({ variant: "default" })}
              >
                LOGIN
              </Link>
              <Link
                href={"/register"}
                className={buttonVariants({ variant: "default" })}
              >
                REGISTER
              </Link>
            </PopoverContent>
          </Popover>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
