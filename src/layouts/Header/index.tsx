import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Input,
} from '@nextui-org/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import React from 'react';

import IconBell from '@/assets/icons/IconBell';
import IconCart from '@/assets/icons/IconCart';
import IconChat from '@/assets/icons/IconChat';
import IconPen from '@/assets/icons/IconPen';
import IconSearch from '@/assets/icons/IconSearch';

const GRADIENT = 'bg-gradient-to-r from-main to-main2';

const Header = () => {
  const router = useRouter();

  return (
    <div className={clsx(GRADIENT, 'shadow-lg')}>
      <div
        className={clsx(
          'mx-auto flex max-w-6xl flex-col items-center pt-[18px]'
        )}
      >
        <div className="flex w-full  justify-end px-[10px]">
          <ul className="flex cursor-pointer gap-3 text-[14px] text-[#fff]">
            <li className="font-bold opacity-100">Sàn chó</li>
            <li className="opacity-70 hover:opacity-100">Sàn mèo</li>
            <li className="opacity-70 hover:opacity-100">Sàn voi</li>
            <li className="opacity-70 hover:opacity-100">Sàn cá</li>
            <li className="opacity-70 hover:opacity-100">Sàn chim</li>
          </ul>
        </div>
        <div
          className={clsx(
            'flex w-full items-center justify-between gap-8 border-b-0 py-[12px]'
          )}
        >
          <div className="flex flex-1 items-center">
            <Image
              alt="Next UI"
              className="mr-[40px] h-[60px] w-[60px]"
              src={`${router.basePath}/assets/images/logo.png`}
              radius="none"
            />
            <Input
              fullWidth
              placeholder="you@example.com"
              variant="bordered"
              classNames={{
                input: 'text-[16px]',
                innerWrapper: 'bg-white',
                inputWrapper: 'bg-white border-1 focus:border-white',
              }}
              size="sm"
              endContent={
                <Button isIconOnly className="bg-main" aria-label="Like">
                  <IconSearch />
                </Button>
              }
            />
          </div>
          <div className="flex gap-4">
            <Button
              color="danger"
              className="bg-[#FF8A00]"
              variant="shadow"
              startContent={<IconPen />}
            >
              Đăng tin
            </Button>

            <Button
              isIconOnly
              color="warning"
              variant="light"
              aria-label="Thông báo"
            >
              <Badge
                isOneChar
                color="danger"
                shape="circle"
                size="xs"
                placement="top-right"
              >
                <IconBell />
              </Badge>
            </Button>
            <Button
              isIconOnly
              color="warning"
              variant="light"
              aria-label="Giỏ hàng"
            >
              <Badge
                className="border-1"
                size="sm"
                content="3"
                variant="shadow"
                color="danger"
              >
                <IconCart />
              </Badge>
            </Button>
            <Button
              isIconOnly
              color="warning"
              variant="light"
              aria-label="tin nhắn"
            >
              <Badge
                content="1"
                className="border-1"
                size="sm"
                variant="shadow"
                color="danger"
              >
                <IconChat />
              </Badge>
            </Button>

            <Dropdown>
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  color="secondary"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" color="secondary">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings" showDivider>
                  My Settings
                </DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics" showDivider>
                  Analytics
                </DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback" showDivider>
                  Help & Feedback
                </DropdownItem>
                <DropdownItem key="logout" showDivider color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        {/* <Navbar
        position="static"
        
      >
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarMenu>
          {menuItems.map((item: any, index: any) => (
            <NavbarMenuItem key={`${item}`}>
              <Link
                color={
                  index === 2
                    ? 'primary'
                    : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>

        <NavbarContent className="hidden w-full gap-3 md:flex" justify="start">
          <NavbarBrand>
            <Image
              alt="Next UI"
              className="h-[60px] w-[60px]"
              src={`${router.basePath}/assets/images/logo.png`}
            />
          </NavbarBrand>
          <NavbarItem>
            <Input
              fullWidth
              variant="flat"
              placeholder="you@example.com"
              labelPlacement="outside"
              size="lg"
              endContent={
                <MailFilledIcon className="pointer-events-none shrink-0 text-2xl text-default-400" />
              }
            />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <NavbarItem>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </NavbarItem>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" color="secondary">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings" showDivider>
                My Settings
              </DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics" showDivider>
                Analytics
              </DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback" showDivider>
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" showDivider color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar> */}
      </div>
    </div>
  );
};

export default Header;
