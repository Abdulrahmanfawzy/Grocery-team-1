import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { cn } from 'cn'
import { Link } from 'react-router-dom'

export type BreadcrumbItemType = {
  label: string
  href?: string
}

type AppBreadcrumbProps = {
  breadcrumbItems: BreadcrumbItemType[]
  lableColor?: string
}

const AppBreadcrumb = ({
  breadcrumbItems,
  lableColor = 'text-app-light-blue',
}: AppBreadcrumbProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="flex items-center">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1

          return (
            <div key={item.label} className="flex items-center">
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className={cn(lableColor, 'text-base font-bold')}>
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <Link
                    to={item.href || ''}
                    className="text-app-secondary! text-base font-bold hover:text-app-main"
                  >
                    {item.label}
                  </Link>
                )}
              </BreadcrumbItem>

              {!isLast && (
                <BreadcrumbSeparator className="text-app-secondary! [&>svg]:hidden pl-0.5">
                  /
                </BreadcrumbSeparator>
              )}
            </div>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default AppBreadcrumb
