"use client";

import Link from "next/link";
import { Fragment } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function CustomBreadcrumb({ data }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {data.map((ele, index) => (
          <Fragment key={index} >
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link href={ele?.link}>{ele?.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index >= data.length - 1 ? null : <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
