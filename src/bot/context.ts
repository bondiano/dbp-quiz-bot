import { Context as DefaultContext, SessionFlavor, type Api } from 'grammy';
import { ScenesFlavor } from 'grammy-scenes';
import OpenAI from 'openai';

import type { AutoChatActionFlavor } from '@grammyjs/auto-chat-action';
import type { HydrateFlavor } from '@grammyjs/hydrate';
import type { I18nFlavor } from '@grammyjs/i18n';
import type { ParseModeFlavor } from '@grammyjs/parse-mode';
import { Update, UserFromGetMe } from '@grammyjs/types';

import { PrismaClientX } from '@quiz-bot/prisma.js';
import { Services } from '@quiz-bot/services/index.js';

import { SessionData } from './session.js';

import type { Logger } from '../logger.js';

type ExtendedContextFlavor = {
  logger: Logger;
  prisma: PrismaClientX;
  services: Services;
  openai: OpenAI;
};

export type Context = ParseModeFlavor<
  HydrateFlavor<
    DefaultContext &
      ExtendedContextFlavor &
      SessionFlavor<SessionData> &
      I18nFlavor &
      AutoChatActionFlavor &
      ScenesFlavor
  >
>;

interface Dependencies {
  services: Services;
  prisma: PrismaClientX;
  logger: Logger;
  openai: OpenAI;
}

export function createContextConstructor({
  logger,
  prisma,
  services,
  openai,
}: Dependencies) {
  return class extends DefaultContext implements ExtendedContextFlavor {
    prisma: PrismaClientX;
    logger: Logger;
    services: Services;
    openai: OpenAI;

    constructor(update: Update, api: Api, me: UserFromGetMe) {
      super(update, api, me);

      this.logger = logger.child({
        update_id: this.update.update_id,
      });
      this.services = services;
      this.prisma = prisma;
      this.openai = openai;
    }
  } as unknown as new (update: Update, api: Api, me: UserFromGetMe) => Context;
}
