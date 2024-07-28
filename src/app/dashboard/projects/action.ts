import { NextResponse } from "next/server";
import { db } from "~/server/db";
import { items } from "~/server/db/schemas/item";

export function addProject() {
    // 
    return {
        type: "ADD_PROJECT",
    };
}

export function removeProject() {
    // 
    return {
        type: "REMOVE_PROJECT",
    };
}

export function updateProject() {
    // 
    return {
        type: "UPDATE_PROJECT",
    };
}

export async function getProject() {
    
  const allProjects = await db.select().from(items);
  return NextResponse.json(allProjects);
  
}