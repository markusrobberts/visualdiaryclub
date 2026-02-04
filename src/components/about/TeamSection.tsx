"use client";

import Image from "next/image";
import { team } from "@/lib/data";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

export default function TeamSection() {
  return (
    <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member) => (
        <StaggerItem key={member.id}>
          <div className="group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-neutral-100 mb-4">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="font-medium text-neutral-900">{member.name}</h3>
            <p className="text-sm text-neutral-400 mt-1">{member.role}</p>
            <p className="text-sm text-neutral-500 mt-3 leading-relaxed">
              {member.bio}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
